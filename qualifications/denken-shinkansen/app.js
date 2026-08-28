const catalogUrl = 'catalog.json';

async function loadCatalog() {
  const response = await fetch(catalogUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error(`catalog load failed: ${response.status}`);
  return response.json();
}

function publishedCount(catalog, seriesId) {
  return catalog.topics.filter((topic) => topic.seriesId === seriesId).length;
}

function renderIndex(catalog) {
  const seriesRoot = document.querySelector('[data-series-grid]');
  const topicRoot = document.querySelector('[data-topic-list]');
  const published = document.querySelector('[data-published-count]');
  const total = catalog.series.reduce((sum, series) => sum + series.targetTopics, 0);

  if (published) published.textContent = `${catalog.topics.length} / ${total} テーマ公開`;

  if (seriesRoot) {
    seriesRoot.innerHTML = catalog.series
      .sort((a, b) => a.order - b.order)
      .map((series) => {
        const count = publishedCount(catalog, series.id);
        const pct = Math.min(100, (count / series.targetTopics) * 100);
        return `
          <article class="series-card">
            <h3>${String(series.order).padStart(2, '0')} ${series.name}</h3>
            <p>${series.level}・${series.category}｜${count} / ${series.targetTopics} テーマ公開</p>
            <div class="series-progress" aria-label="${count}/${series.targetTopics}"><span style="width:${pct}%"></span></div>
          </article>`;
      }).join('');
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  let activeFilter = 'all';

  function drawTopics() {
    const topics = catalog.topics
      .filter((topic) => activeFilter === 'all' || topic.seriesId === activeFilter)
      .sort((a, b) => {
        const sa = catalog.series.find((series) => series.id === a.seriesId)?.order ?? 99;
        const sb = catalog.series.find((series) => series.id === b.seriesId)?.order ?? 99;
        return sa - sb || a.topicNo - b.topicNo;
      });

    if (!topicRoot) return;
    if (!topics.length) {
      topicRoot.innerHTML = '<div class="empty-state">この系列はまだWeb公開された教材がありません。</div>';
      return;
    }

    topicRoot.innerHTML = topics.map((topic) => {
      const series = catalog.series.find((item) => item.id === topic.seriesId);
      return `
        <a class="topic-card" href="viewer.html?id=${encodeURIComponent(topic.id)}">
          <span class="topic-number">${String(topic.topicNo).padStart(2, '0')}</span>
          <span>
            <h3>${topic.title}</h3>
            <p>${series?.name ?? ''}｜${topic.summary}</p>
          </span>
          <span class="topic-open">教材を見る →</span>
        </a>`;
    }).join('');
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle('is-active', item === button));
      drawTopics();
    });
  });

  drawTopics();
}

function renderViewer(catalog) {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const topic = catalog.topics.find((item) => item.id === id);
  const error = document.querySelector('[data-viewer-error]');
  const content = document.querySelector('[data-viewer-content]');

  if (!topic) {
    if (error) error.hidden = false;
    if (content) content.hidden = true;
    return;
  }

  const series = catalog.series.find((item) => item.id === topic.seriesId);
  document.title = `${topic.title}｜電験×新幹線｜ひかり教材室`;
  document.querySelector('[data-series-name]').textContent = series?.name ?? '';
  document.querySelector('[data-topic-title]').textContent = topic.title;
  document.querySelector('[data-topic-summary]').textContent = topic.summary;

  const frame = document.querySelector('[data-pdf-frame]');
  const direct = document.querySelector('[data-pdf-direct]');
  const explanationButton = document.querySelector('[data-show-explanation]');
  const practiceButton = document.querySelector('[data-show-practice]');
  const downloadExplanation = document.querySelector('[data-download-explanation]');
  const downloadPractice = document.querySelector('[data-download-practice]');
  const slides = document.querySelector('[data-slides]');
  const source = document.querySelector('[data-source]');

  function showPdf(kind) {
    const url = topic[kind];
    frame.src = url;
    direct.href = url;
    explanationButton.classList.toggle('is-active', kind === 'explanation');
    practiceButton.classList.toggle('is-active', kind === 'practice');
  }

  explanationButton.addEventListener('click', () => showPdf('explanation'));
  practiceButton.addEventListener('click', () => showPdf('practice'));
  downloadExplanation.href = topic.explanation;
  downloadPractice.href = topic.practice;
  slides.href = topic.slides;
  source.href = topic.source;
  showPdf('explanation');
}

loadCatalog()
  .then((catalog) => {
    if (document.body.dataset.page === 'index') renderIndex(catalog);
    if (document.body.dataset.page === 'viewer') renderViewer(catalog);
  })
  .catch((error) => {
    console.error(error);
    const target = document.querySelector('[data-load-error]');
    if (target) target.hidden = false;
  });
