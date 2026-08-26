export function renderResults(container, results, skillLabels = new Map()) {
  const accuracyPercent = Math.round(results.accuracy * 100);
  const rows = Object.entries(results.bySkill).map(([skillId, value]) => {
    const label = skillLabels.get(skillId) ?? skillId;
    return `<li><span>${escapeHtml(label)}</span><strong>${value.correct}/${value.answered}</strong></li>`;
  }).join('');

  container.innerHTML = `
    <section class="result-card" aria-labelledby="result-title">
      <p class="eyebrow">TRAINING COMPLETE</p>
      <h2 id="result-title">結果</h2>
      <div class="result-score"><strong>${results.correct}</strong><span>/ ${results.answered}</span></div>
      <p class="result-accuracy">正答率 ${accuracyPercent}%</p>
      <ul class="skill-results">${rows}</ul>
      <div class="result-actions">
        <button type="button" class="primary-button" data-action="restart">もう一度</button>
      </div>
    </section>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}
