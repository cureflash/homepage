import { createPresetRecipe, createWeaknessWorkoutRecipe } from '../core/workout-builder.js';
import { createCategoryWorkout } from '../core/category-workouts.js';
import { buildMasterySnapshots } from '../core/mastery.js';
import { rankWeakSkills } from '../core/weakness.js';
import { getDueReviewQuestionIds } from '../core/review.js';

const MODE_CARDS = Object.freeze([
  { id: 'quick', title: 'クイック10', copy: 'まず10問。短時間で今日の学習を始める。' },
  { id: 'weakness', title: 'おすすめ弱点特訓', copy: '苦手な分野を提案。内容を調整してから始める。' },
  { id: 'training', title: '分野別30', copy: '大分類から小分類を選んで、集中的に鍛える。' },
  { id: 'power', title: 'POWER 100', copy: '分野を選び、長い訓練や無限反復を始める。' },
  { id: 'review', title: '復習', copy: '復習時期になった問題だけを解き直す。' },
  { id: 'test', title: '総合テスト30', copy: '出題する大分類を選び、分野名を隠して確認。' },
  { id: 'custom', title: 'カスタム', copy: '問題数と分野配分を自分で編集する。' },
]);

export class HomeView {
  constructor({ container, repository, appStore, onStart, onEdit }) {
    Object.assign(this, { container, repository, appStore, onStart, onEdit });
  }

  render() {
    const state = this.appStore.load();
    const skills = this.repository.listSkills();
    const categories = this.repository.listCategories();
    const availableSkills = new Set(skills.map((skill) => skill.id));
    const weaknesses = rankWeakSkills(buildMasterySnapshots({ attempts: state.attempts, skillIds: [...availableSkills] }))
      .filter((entry) => availableSkills.has(entry.skillId));
    const dueCount = getDueReviewQuestionIds(state.reviewEntries).length;
    const stage = Math.min(5, Math.max(0, Number(state.progression?.stage) || 0));
    this.container.innerHTML = `
      <section class="home-hero">
        <p class="eyebrow">TODAY'S TRAINING</p><h2>今日は何を鍛える？</h2>
        <p class="home-summary">訓練生ステージ ${stage} ・ ${state.progression.points} POWER${dueCount ? ` ・ 復習 ${dueCount}問` : ''}</p>
        <p data-role="home-notice" role="status" hidden></p>
      </section>
      <div class="home-grid">
        ${MODE_CARDS.map((card) => `<button type="button" class="home-card" data-home-mode="${card.id}"><strong>${card.title}</strong><span>${card.copy}</span></button>`).join('')}
      </div>
      <section class="home-skills" data-role="home-skills" hidden></section>`;

    const panel = this.container.querySelector('[data-role="home-skills"]');
    let pendingMode = null;
    let activeCategory = null;
    const selectedCategories = new Set();
    const renderPanel = () => {
      const heading = pendingMode === 'TEST' ? 'テストの大分類を選ぶ' : activeCategory?.label ?? '大分類を選ぶ';
      panel.hidden = false;
      panel.innerHTML = `
        <div class="home-section-heading"><h3>${heading}</h3><button type="button" class="text-button" data-home-action="close-skills">閉じる</button></div>
        <div class="home-skill-list">
          ${pendingMode === 'TEST'
            ? categories.map((category) => `<label class="category-choice"><input type="checkbox" data-home-test-category="${category.id}" ${selectedCategories.has(category.id) ? 'checked' : ''}>${category.label}</label>`).join('')
            : activeCategory
              ? `<button type="button" class="secondary-button" data-home-action="train-category">この大分類をまとめて特訓</button>
                 <button type="button" class="secondary-button" data-home-action="test-category">この大分類でテスト</button>
                 ${activeCategory.skills.map((skill) => `<button type="button" class="secondary-button" data-home-skill="${skill.id}">${skill.label}</button>`).join('')}
                 <button type="button" class="text-button" data-home-action="back-categories">大分類に戻る</button>`
              : categories.map((category) => `<button type="button" class="secondary-button" data-home-category="${category.id}">${category.label}</button>`).join('')}
        </div>
        ${pendingMode === 'TEST' ? `<button type="button" class="primary-button" data-home-action="edit-test" ${selectedCategories.size ? '' : 'disabled'}>この範囲で内容を調整</button>` : ''}`;
    };

    this.container.onchange = (event) => {
      const category = event.target.dataset.homeTestCategory;
      if (!category) return;
      if (event.target.checked) selectedCategories.add(category); else selectedCategories.delete(category);
      panel.querySelector('[data-home-action="edit-test"]').disabled = selectedCategories.size === 0;
    };
    this.container.onclick = (event) => {
      const action = event.target.closest('[data-home-action]')?.dataset.homeAction;
      if (action === 'close-skills') { panel.hidden = true; return; }
      if (action === 'back-categories') { activeCategory = null; renderPanel(); return; }
      if (action === 'edit-test') {
        return this.onEdit(createCategoryWorkout({ repository: this.repository, categoryIds: [...selectedCategories], mode: 'TEST' }));
      }
      if (action === 'train-category' || action === 'test-category') {
        return this.onEdit(createCategoryWorkout({
          repository: this.repository, categoryIds: [activeCategory.id],
          mode: action === 'test-category' ? 'TEST' : pendingMode,
          totalCount: action === 'train-category' && pendingMode === 'POWER' ? 100 : 30,
        }));
      }
      const categoryButton = event.target.closest('[data-home-category]');
      if (categoryButton) { activeCategory = categories.find((category) => category.id === categoryButton.dataset.homeCategory); renderPanel(); return; }
      const skillButton = event.target.closest('[data-home-skill]');
      if (skillButton && pendingMode) return this.onEdit(createPresetRecipe(pendingMode, { skillId: skillButton.dataset.homeSkill }));
      const mode = event.target.closest('[data-home-mode]')?.dataset.homeMode;
      if (!mode) return;
      if (mode === 'custom') return this.onEdit();
      if (mode === 'weakness') {
        const recipe = weaknesses.length
          ? createWeaknessWorkoutRecipe(weaknesses.map((entry) => ({ skillId: entry.skillId, score: entry.weaknessScore })))
          : createCategoryWorkout({ repository: this.repository, categoryIds: categories.map((category) => category.id), mode: 'CUSTOM' });
        return this.onEdit(recipe);
      }
      if (mode === 'training' || mode === 'power' || mode === 'test') {
        pendingMode = mode.toUpperCase();
        activeCategory = null;
        selectedCategories.clear();
        categories.forEach((category) => selectedCategories.add(category.id));
        renderPanel();
        return;
      }
      this.onStart(createPresetRecipe(mode.toUpperCase()));
    };
  }
}
