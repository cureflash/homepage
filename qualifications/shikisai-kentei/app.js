const catalogUrl = 'catalog.json';

async function loadCatalog() {
  const response = await fetch(catalogUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error(`catalog load failed: ${response.status}`);
  return response.json();
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
  html = html.replace(/\x60([^\x60]+)\x60/g, '<code>$1</code>');
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
    return !t || /^#{1,6}\s/.test(t) || /^\x60\x60\x60/.test(t) || /^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t) || /^---+$/.test(t) || /^>\s?/.test(t) || t.startsWith('|') || t.startsWith('$$');
  };

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) { i += 1; continue; }

    if (line.startsWith('$$')) {
      const math = [line];
      i += 1;
      if (line === '$$' || !line.endsWith('$$') || line.length === 2) {
        while (i < lines.length) {
          math.push(lines[i].trim());
          const current = lines[i].trim();
          i += 1;
          if (current.endsWith('$$')) break;
        }
      }
      out.push(`<div class="math-block">${escapeHtml(math.join('\n'))}</div>`);
      continue;
    }

    if (/^\x60\x60\x60/.test(line)) {
      const code = [];
      i += 1;
      while (i < lines.length && !/^\x60\x60\x60/.test(lines[i].trim())) {
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

function publishedCount(catalog, seriesId) {
  return catalog.topics.filter((topic) => topic.seriesId === seriesId).length;
}

function renderIndex(catalog) {
  const seriesRoot = document.querySelector('[data-series-grid]');
  const topicRoot = document.querySelector('[data-topic-list]');
  const filterRoot = document.querySelector('[data-filter-root]');
  const published = document.querySelector('[data-published-count]');

  if (published) published.textContent = `${catalog.topics.length} / ${catalog.targetArticles} 記事公開`;

  if (seriesRoot) {
    seriesRoot.innerHTML = [...catalog.series].sort((a,b) => a.order - b.order).map((series) => {
      const count = publishedCount(catalog, series.id);
      const pct = Math.min(100, (count / series.targetTopics) * 100);
      return `<article class="series-card">
        <h3>${series.name}</h3>
        <p>${series.description}</p>
        <p>${count} / ${series.targetTopics} 記事公開</p>
        <div class="series-progress" aria-label="${count}/${series.targetTopics}"><span style="width:${pct}%"></span></div>
      </article>`;
    }).join('');
  }

  let activeFilter = 'all';
  if (filterRoot) {
    filterRoot.innerHTML = ['<button class="color-filter is-active" type="button" data-filter="all">すべて</button>']
      .concat([...catalog.series].sort((a,b) => a.order - b.order).map((series) => `<button class="color-filter" type="button" data-filter="${series.id}">${series.name}</button>`))
      .join('');
  }

  function drawTopics() {
    const topics = [...catalog.topics]
      .filter((topic) => activeFilter === 'all' || topic.seriesId === activeFilter)
      .sort((a,b) => a.articleNo - b.articleNo);

    if (!topicRoot) return;
    if (!topics.length) {
      topicRoot.innerHTML = '<div class="empty-state">この系列はまだ公開記事がありません。</div>';
      return;
    }

    topicRoot.innerHTML = topics.map((topic) => {
      const series = catalog.series.find((item) => item.id === topic.seriesId);
      const tags = (topic.levels || []).map((level) => `<span class="topic-tag">${escapeHtml(level)}</span>`).join('');
      return `<a class="topic-card" href="viewer.html?id=${encodeURIComponent(topic.id)}">
        <span class="topic-number">#${String(topic.articleNo).padStart(2,'0')}</span>
        <span>
          <h3>${escapeHtml(topic.title)}</h3>
          <p>${escapeHtml(series?.name || '')}｜${escapeHtml(topic.summary)}</p>
          <span class="topic-tags">${tags}</span>
        </span>
        <span class="topic-open">読む →</span>
      </a>`;
    }).join('');
  }

  filterRoot?.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterRoot.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
      drawTopics();
    });
  });

  drawTopics();
}

function typesetMath(attempt = 0) {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise().catch(console.error);
    return;
  }
  if (attempt < 30) setTimeout(() => typesetMath(attempt + 1), 100);
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
  document.title = `${topic.title}｜色彩検定×自然科学｜ひかり教材室`;
  document.querySelector('[data-series-name]').textContent = series?.name ?? '';
  document.querySelector('[data-topic-title]').textContent = topic.title;
  document.querySelector('[data-topic-summary]').textContent = topic.summary;
  document.querySelector('[data-topic-meta]').innerHTML = (topic.levels || []).map((level) => `<span>${escapeHtml(level)}</span>`).join('');

  try {
    const response = await fetch(topic.source, { cache: 'no-store' });
    if (!response.ok) throw new Error(`article load failed: ${response.status}`);
    const markdown = await response.text();
    const root = document.querySelector('[data-article-content]');
    root.innerHTML = markdownToHtml(markdown);
    typesetMath();
  } catch (err) {
    console.error(err);
    document.querySelector('[data-article-content]').hidden = true;
    document.querySelector('[data-article-error]').hidden = false;
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
