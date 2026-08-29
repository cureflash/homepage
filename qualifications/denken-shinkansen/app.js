const catalogUrl = 'catalog.json';

async function loadCatalog() {
  const response = await fetch(catalogUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error(`catalog load failed: ${response.status}`);
  return response.json();
}

function publishedCount(catalog, seriesId) {
  return catalog.topics.filter((topic) => topic.seriesId === seriesId).length;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderInline(value) {
  let html = escapeHtml(value);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return html;
}

function markdownToHtml(markdown) {
  const lines = String(markdown).replaceAll('\r\n', '\n').split('\n');
  const out = [];
  let i = 0;

  const isSpecial = (line) => {
    const t = line.trim();
    return !t || /^#{1,6}\s/.test(t) || /^```/.test(t) || /^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t) || /^---+$/.test(t) || /^>\s?/.test(t) || t.startsWith('|');
  };

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (/^```/.test(line)) {
      const code = [];
      i += 1;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        code.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1;
      out.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(4, heading[1].length + 1);
      out.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      out.push('<hr>');
      i += 1;
      continue;
    }

    if (line.startsWith('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim());
        i += 1;
      }
      const cells = (row) => row.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
      const header = cells(rows[0]);
      const body = rows.slice(2).map(cells);
      out.push('<div class="article-table-wrap"><table><thead><tr>' + header.map((cell) => `<th>${renderInline(cell)}</th>`).join('') + '</tr></thead><tbody>' + body.map((row) => '<tr>' + row.map((cell) => `<td>${renderInline(cell)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>');
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i += 1;
      }
      out.push('<ul>' + items.map((item) => `<li>${renderInline(item)}</li>`).join('') + '</ul>');
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      out.push('<ol>' + items.map((item) => `<li>${renderInline(item)}</li>`).join('') + '</ol>');
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quotes = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quotes.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }
      out.push(`<blockquote>${quotes.map(renderInline).join('<br>')}</blockquote>`);
      continue;
    }

    const paragraph = [raw.trim()];
    i += 1;
    while (i < lines.length && !isSpecial(lines[i])) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    out.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
  }

  return out.join('\n');
}

function renderIndex(catalog) {
  const seriesRoot = document.querySelector('[data-series-grid]');
  const topicRoot = document.querySelector('[data-topic-list]');
  const published = document.querySelector('[data-published-count]');
  const total = catalog.series.reduce((sum, series) => sum + series.targetTopics, 0);

  if (published) published.textContent = `${catalog.topics.length} / ${total} テーマWeb公開`;

  if (seriesRoot) {
    seriesRoot.innerHTML = catalog.series
      .sort((a, b) => a.order - b.order)
      .map((series) => {
        const count = publishedCount(catalog, series.id);
        const pct = Math.min(100, (count / series.targetTopics) * 100);
        return `
          <article class="series-card">
            <h3>${String(series.order).padStart(2, '0')} ${series.name}</h3>
            <p>${series.level}・${series.category}｜${count} / ${series.targetTopics} テーマWeb公開</p>
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
      const status = topic.publicationStatus === 'article_rebuild'
        ? '<span class="topic-status topic-status-rebuild">Web記事公開・PDF再構築中</span>'
        : '<span class="topic-status">教材公開</span>';
      return `
        <a class="topic-card" href="viewer.html?id=${encodeURIComponent(topic.id)}">
          <span class="topic-number">${String(topic.topicNo).padStart(2, '0')}</span>
          <span>
            <div class="topic-title-row"><h3>${topic.title}</h3>${status}</div>
            <p>${series?.name ?? ''}｜${topic.summary}</p>
          </span>
          <span class="topic-open">読む →</span>
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

async function renderViewer(catalog) {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const topic = catalog.topics.find((item) => item.id === id);
  const error = document.querySelector('[data-viewer-error]');
  const content = document.querySelectorAll('[data-viewer-content]');

  if (!topic) {
    if (error) error.hidden = false;
    content.forEach((item) => { item.hidden = true; });
    return;
  }

  const series = catalog.series.find((item) => item.id === topic.seriesId);
  document.title = `${topic.title}｜電験×新幹線｜ひかり教材室`;
  document.querySelector('[data-series-name]').textContent = series?.name ?? '';
  document.querySelector('[data-topic-title]').textContent = topic.title;
  document.querySelector('[data-topic-summary]').textContent = topic.summary;

  const note = document.querySelector('[data-publication-note]');
  if (topic.publicationStatus === 'article_rebuild' && note) {
    note.hidden = false;
    note.textContent = 'Web記事は新版です。解説PDF・練習PDF・PowerPointは新版に合わせて再構築中です。';
  }

  const frame = document.querySelector('[data-pdf-frame]');
  const direct = document.querySelector('[data-pdf-direct]');
  const pdfSection = document.querySelector('[data-pdf-section]');
  const articleSection = document.querySelector('[data-article-section]');
  const articleContent = document.querySelector('[data-article-content]');
  const articleError = document.querySelector('[data-article-error]');
  const articleButton = document.querySelector('[data-show-article]');
  const explanationButton = document.querySelector('[data-show-explanation]');
  const practiceButton = document.querySelector('[data-show-practice]');
  const downloadExplanation = document.querySelector('[data-download-explanation]');
  const downloadPractice = document.querySelector('[data-download-practice]');
  const slides = document.querySelector('[data-slides]');
  const source = document.querySelector('[data-source]');

  const hasArticle = Boolean(topic.webArticle && topic.source);
  const hasExplanation = Boolean(topic.explanation);
  const hasPractice = Boolean(topic.practice);
  const hasSlides = Boolean(topic.slides);

  articleButton.hidden = !hasArticle;
  explanationButton.hidden = !hasExplanation;
  practiceButton.hidden = !hasPractice;
  downloadExplanation.hidden = !hasExplanation;
  downloadPractice.hidden = !hasPractice;
  slides.hidden = !hasSlides;
  source.hidden = !topic.source;

  if (hasExplanation) downloadExplanation.href = topic.explanation;
  if (hasPractice) downloadPractice.href = topic.practice;
  if (hasSlides) slides.href = topic.slides;
  if (topic.source) source.href = topic.source;

  function setActive(button) {
    [articleButton, explanationButton, practiceButton].forEach((item) => item.classList.toggle('is-active', item === button));
  }

  async function showArticle() {
    setActive(articleButton);
    pdfSection.hidden = true;
    articleSection.hidden = false;
    if (articleContent.dataset.loaded === 'true') return;
    try {
      const response = await fetch(topic.source, { cache: 'no-store' });
      if (!response.ok) throw new Error(`article load failed: ${response.status}`);
      const markdown = await response.text();
      articleContent.innerHTML = markdownToHtml(markdown);
      articleContent.dataset.loaded = 'true';
    } catch (err) {
      console.error(err);
      articleContent.hidden = true;
      articleError.hidden = false;
    }
  }

  function showPdf(kind, button) {
    const url = topic[kind];
    if (!url) return;
    setActive(button);
    articleSection.hidden = true;
    pdfSection.hidden = false;
    frame.src = url;
    direct.href = url;
  }

  articleButton.addEventListener('click', showArticle);
  explanationButton.addEventListener('click', () => showPdf('explanation', explanationButton));
  practiceButton.addEventListener('click', () => showPdf('practice', practiceButton));

  if (hasArticle) {
    await showArticle();
  } else if (hasExplanation) {
    showPdf('explanation', explanationButton);
  } else if (hasPractice) {
    showPdf('practice', practiceButton);
  }
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
