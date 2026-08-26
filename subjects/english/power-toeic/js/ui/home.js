import { createPresetRecipe, createWeaknessWorkoutRecipe } from '../core/workout-builder.js';
import { buildMasterySnapshots } from '../core/mastery.js';
import { rankWeakSkills } from '../core/weakness.js';
import { getDueReviewQuestionIds } from '../core/review.js';

const MODE_CARDS = Object.freeze([
  { id: 'quick', title: 'クイック10', copy: 'まず10問。短時間で今日の学習を始める。' },
  { id: 'weakness', title: 'おすすめ弱点特訓', copy: 'これまでの回答から、苦手な分野を優先して出題。' },
  { id: 'training', title: '分野別30', copy: '選んだ分野を30問まとめて鍛える。' },
  { id: 'power', title: 'POWER 100', copy: '選んだ分野を100問。集中的に反復する。' },
  { id: 'review', title: '復習', copy: '復習時期になった問題だけを解き直す。' },
  { id: 'test', title: '総合テスト30', copy: '分野名を隠して30問。本当に見分けられるか確認。' },
  { id: 'custom', title: 'カスタム', copy: '問題数と分野配分を自分で編集する。' },
]);

export class HomeView {
  constructor({ container, repository, appStore, onStart, onEdit }) {
    this.container = container;
    this.repository = repository;
    this.appStore = appStore;
    this.onStart = onStart;
    this.onEdit = onEdit;
  }

  render() {
    const state = this.appStore.load();
    const skills = this.repository.listSkills();
    const snapshots = buildMasterySnapshots({ attempts: state.attempts, skillIds: skills.map((skill) => skill.id) });
    const weaknesses = rankWeakSkills(snapshots);
    const dueCount = getDueReviewQuestionIds(state.reviewEntries).length;
    const stage = Math.min(5, Math.max(0, Number(state.progression?.stage) || 0));
    const points = Number(state.progression?.points) || 0;

    this.container.innerHTML = `
      <section class="home-hero">
        <p class="eyebrow">TODAY'S TRAINING</p>
        <h2>今日は何を鍛える？</h2>
        <p class="home-summary">訓練生ステージ ${stage} ・ ${points} POWER${dueCount ? ` ・ 復習 ${dueCount}問` : ''}</p>
      </section>
      <div class="home-grid">
        ${MODE_CARDS.map((card) => `<button type="button" class="home-card" data-home-mode="${card.id}"><strong>${card.title}</strong><span>${card.copy}</span></button>`).join('')}
      </div>
      <section class="home-skills" data-role="home-skills" hidden>
        <div class="home-section-heading"><h3>分野を選ぶ</h3><button type="button" class="text-button" data-home-action="close-skills">閉じる</button></div>
        <div class="home-skill-list">${skills.map((skill) => `<button type="button" class="secondary-button" data-home-skill="${skill.id}">${skill.label}</button>`).join('')}</div>
      </section>`;

    let pendingMode = null;
    this.container.onclick = (event) => {
      const modeButton = event.target.closest('[data-home-mode]');
      const skillButton = event.target.closest('[data-home-skill]');
      if (event.target.closest('[data-home-action="close-skills"]')) {
        this.container.querySelector('[data-role="home-skills"]').hidden = true;
        return;
      }
      if (skillButton && pendingMode) {
        const recipe = createPresetRecipe(pendingMode, { skillId: skillButton.dataset.homeSkill });
        this.onStart(recipe);
        return;
      }
      if (!modeButton) return;
      const mode = modeButton.dataset.homeMode;
      if (mode === 'custom') return this.onEdit();
      if (mode === 'weakness') {
        if (!weaknesses.length) return this.onStart(createPresetRecipe('QUICK'));
        return this.onStart(createWeaknessWorkoutRecipe(weaknesses.map((entry) => ({ skillId: entry.skillId, score: entry.weaknessScore }))));
      }
      if (mode === 'training' || mode === 'power') {
        pendingMode = mode.toUpperCase();
        this.container.querySelector('[data-role="home-skills"]').hidden = false;
        return;
      }
      this.onStart(createPresetRecipe(mode.toUpperCase()));
    };
  }
}
