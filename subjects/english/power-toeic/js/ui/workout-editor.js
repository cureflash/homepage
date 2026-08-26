import {
  addSkillAllocation,
  createWorkoutDraft,
  normalizeEditedWorkout,
  removeSkillAllocation,
  setSkillCount,
  setWorkoutTotalCount,
} from '../core/workout-editor-model.js';

export class WorkoutEditor {
  constructor({ container, repository, onStart }) {
    this.container = container;
    this.repository = repository;
    this.onStart = onStart;
    this.draft = null;
    this.error = '';
  }

  open(recipe) {
    this.draft = createWorkoutDraft(recipe);
    this.error = '';
    this.render();
  }

  render() {
    if (!this.draft) return;
    const skills = this.repository.listSkills();
    const labels = new Map(skills.map((skill) => [skill.id, skill.label]));
    const allocated = new Set(this.draft.skillAllocations.map((entry) => entry.skillId));
    const addable = skills.filter((skill) => !allocated.has(skill.id));

    this.container.innerHTML = `
      <div class="editor-card">
        <div class="editor-heading">
          <div>
            <p class="eyebrow">WORKOUT EDITOR</p>
            <h2>トレーニングを調整</h2>
          </div>
          <label class="total-count-field">合計
            <input data-editor="total" inputmode="numeric" type="number" min="1" value="${this.draft.totalCount}">
          </label>
        </div>
        <div class="allocation-list">
          ${this.draft.skillAllocations.map((entry) => `
            <div class="allocation-row" data-skill="${entry.skillId}">
              <div class="allocation-label">${labels.get(entry.skillId) ?? entry.skillId}</div>
              <label>問題数
                <input data-editor="count" data-skill-id="${entry.skillId}" inputmode="numeric" type="number" min="1" value="${entry.count ?? 1}">
              </label>
              <button type="button" class="text-button danger" data-editor="remove" data-skill-id="${entry.skillId}">削除</button>
            </div>
          `).join('') || '<p class="editor-empty">スキルを1つ以上追加してください。</p>'}
        </div>
        <div class="editor-add-row">
          <label>追加する分野
            <select data-editor="skill-picker">
              <option value="">選択...</option>
              ${addable.map((skill) => `<option value="${skill.id}">${skill.label}</option>`).join('')}
            </select>
          </label>
          <button type="button" class="secondary-button" data-editor="add" ${addable.length ? '' : 'disabled'}>追加</button>
        </div>
        <p class="editor-error" role="alert" ${this.error ? '' : 'hidden'}>${this.error}</p>
        <button type="button" class="primary-button editor-start" data-editor="start">この内容で開始</button>
      </div>`;

    this.bind();
  }

  bind() {
    this.container.querySelector('[data-editor="total"]')?.addEventListener('change', (event) => {
      this.draft = setWorkoutTotalCount(this.draft, event.target.value);
      this.tryValidate(false);
    });

    this.container.querySelectorAll('[data-editor="count"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        this.draft = setSkillCount(this.draft, event.target.dataset.skillId, event.target.value);
        this.tryValidate(false);
      });
    });

    this.container.querySelectorAll('[data-editor="remove"]').forEach((button) => {
      button.addEventListener('click', () => {
        this.draft = removeSkillAllocation(this.draft, button.dataset.skillId);
        this.error = '';
        this.render();
      });
    });

    this.container.querySelector('[data-editor="add"]')?.addEventListener('click', () => {
      const picker = this.container.querySelector('[data-editor="skill-picker"]');
      if (!picker?.value) return;
      try {
        this.draft = addSkillAllocation(this.draft, picker.value, 1);
        this.error = '';
      } catch (error) {
        this.error = error.message;
      }
      this.render();
    });

    this.container.querySelector('[data-editor="start"]')?.addEventListener('click', () => {
      const recipe = this.tryValidate(true);
      if (recipe) this.onStart(recipe);
    });
  }

  tryValidate(start) {
    try {
      const recipe = normalizeEditedWorkout(this.draft);
      this.error = '';
      if (!start) this.render();
      return recipe;
    } catch (error) {
      this.error = error.message;
      this.render();
      return null;
    }
  }
}
