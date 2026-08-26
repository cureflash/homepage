const INKSCAPE_NAMESPACE = "http://www.inkscape.org/namespaces/inkscape";
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const SVG_SHAPE_SELECTOR = "path, polygon, polyline, rect, circle, ellipse";

function readSvgAttribute(element, attributeName) {
  const direct = element.getAttribute(attributeName);
  if (direct !== null) return direct;
  if (attributeName === "inkscape:label" && typeof element.getAttributeNS === "function") {
    return element.getAttributeNS(INKSCAPE_NAMESPACE, "label");
  }
  return null;
}

function stripDuplicateIds(element) {
  if (typeof element.removeAttribute === "function") element.removeAttribute("id");
  if (typeof element.querySelectorAll === "function") {
    element.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
  }
}

export function applyRegionKeyMap(candidates, { sourceKeyAttribute, regionKeyMap, keyAttribute }) {
  if (!sourceKeyAttribute || !regionKeyMap) return candidates;

  const mapped = [];
  for (const region of candidates) {
    const sourceKey = readSvgAttribute(region, sourceKeyAttribute);
    if (sourceKey === null || !Object.prototype.hasOwnProperty.call(regionKeyMap, sourceKey)) continue;

    const mapping = regionKeyMap[sourceKey];
    const key = typeof mapping === "object" ? mapping.key : mapping;
    const name = typeof mapping === "object" ? mapping.name : null;
    if (key === null || key === undefined) continue;

    region.setAttribute(keyAttribute, String(key));
    if (name) region.setAttribute("data-name", name);
    if (region.style) region.style.display = "inline";
    mapped.push(region);
  }
  return mapped;
}

export function markDecorativeSourceLayers(candidates, { sourceKeyAttribute, decorativeSourceKeys = [] }) {
  if (!sourceKeyAttribute || decorativeSourceKeys.length === 0) return [];
  const wanted = new Set(decorativeSourceKeys);
  const marked = [];

  candidates.forEach((candidate) => {
    const sourceKey = readSvgAttribute(candidate, sourceKeyAttribute);
    if (!wanted.has(sourceKey)) return;
    candidate.classList?.add("map-decorative-land");
    if (candidate.style) candidate.style.display = "inline";
    marked.push(candidate);
  });

  return marked;
}

export class SvgRegionRenderer {
  constructor({
    root,
    source,
    regionSelector = "[data-code]",
    keyAttribute = "data-code",
    sourceKeyAttribute = null,
    regionKeyMap = null,
    decorativeSourceKeys = [],
    insets = [],
    viewBox = null
  }) {
    this.root = root;
    this.source = source;
    this.regionSelector = regionSelector;
    this.keyAttribute = keyAttribute;
    this.sourceKeyAttribute = sourceKeyAttribute;
    this.regionKeyMap = regionKeyMap;
    this.decorativeSourceKeys = decorativeSourceKeys;
    this.insets = insets;
    this.viewBox = viewBox;
    this.onAnswer = () => {};
    this.ready = false;
    this.currentQuestion = null;
    this.root.innerHTML = '<div class="map-loading">地図を読み込んでいます…</div>';
    this.loadPromise = this.load();
  }

  setAnswerHandler(handler) {
    this.onAnswer = handler;
  }

  async load() {
    try {
      const response = await fetch(this.source, { mode: "cors" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const svgText = await response.text();
      this.root.innerHTML = `<div class="svg-region-stage">${svgText}</div>`;
      this.svg = this.root.querySelector("svg");
      if (!this.svg) throw new Error("SVG not found");
      if (this.viewBox) this.svg.setAttribute("viewBox", this.viewBox);

      const candidates = [...this.root.querySelectorAll(this.regionSelector)];
      this.regions = applyRegionKeyMap(candidates, this);
      if (this.regions.length === 0) throw new Error("No selectable regions found");

      markDecorativeSourceLayers(candidates, this);
      this.applyInsets();
      this.configurePointerEvents();

      this.regions.forEach((region) => {
        region.setAttribute("role", "button");
        region.setAttribute("tabindex", "0");
        const name = region.getAttribute("data-name");
        if (name) region.setAttribute("aria-label", name);
        region.addEventListener("click", () => this.choose(region));
        region.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.choose(region);
          }
        });
      });
      this.ready = true;
      this.resetStyles();
    } catch (error) {
      console.error(error);
      this.root.innerHTML = '<div class="map-error">地図を読み込めませんでした。ページを再読み込みしてください。</div>';
    }
  }

  applyInsets() {
    if (!this.svg || !Array.isArray(this.insets) || this.insets.length === 0) return;

    this.insets.forEach((inset) => {
      const index = this.regions.findIndex(
        (region) => String(region.getAttribute(this.keyAttribute)) === String(inset.key)
      );
      if (index < 0) return;

      const original = this.regions[index];
      if (typeof original.getBBox !== "function" || typeof original.cloneNode !== "function") return;
      const bbox = original.getBBox();
      if (!Number.isFinite(bbox.x) || !Number.isFinite(bbox.y)) return;

      const clone = original.cloneNode(true);
      stripDuplicateIds(clone);
      clone.classList?.add("map-inset-region");
      clone.style.display = "inline";

      const wrapper = document.createElementNS(SVG_NAMESPACE, "g");
      wrapper.classList.add("map-inset-wrapper");
      const x = Number.isFinite(inset.x) ? inset.x : 80;
      const y = Number.isFinite(inset.y) ? inset.y : 80;
      const scale = Number.isFinite(inset.scale) ? inset.scale : 1;
      wrapper.setAttribute(
        "transform",
        `translate(${x} ${y}) scale(${scale}) translate(${-bbox.x} ${-bbox.y})`
      );
      wrapper.appendChild(clone);
      this.svg.appendChild(wrapper);

      original.style.display = "none";
      original.removeAttribute(this.keyAttribute);
      original.removeAttribute("data-name");
      this.regions[index] = clone;
    });
  }

  configurePointerEvents() {
    if (!this.svg || !this.regionKeyMap) return;
    [...this.svg.querySelectorAll(SVG_SHAPE_SELECTOR)].forEach((shape) => {
      shape.style.pointerEvents = "none";
    });
    this.regions.forEach((region) => {
      const shapes = typeof region.matches === "function" && region.matches(SVG_SHAPE_SELECTOR)
        ? [region]
        : [...region.querySelectorAll(SVG_SHAPE_SELECTOR)];
      shapes.forEach((shape) => {
        shape.style.pointerEvents = "auto";
      });
    });
  }

  choose(region) {
    if (!this.ready || !this.currentQuestion) return;
    const value = region.getAttribute(this.keyAttribute);
    if (value !== null) this.onAnswer(value);
  }

  async render(question) {
    this.currentQuestion = question;
    await this.loadPromise;
    this.resetStyles();
  }

  resetStyles() {
    if (!this.regions) return;
    this.regions.forEach((region) => region.classList.remove("is-correct", "is-wrong"));
  }

  showResult({ selected, correct, isCorrect }) {
    if (!this.regions) return;
    const selectedRegion = this.findRegion(selected);
    const correctRegion = this.findRegion(correct);
    if (selectedRegion) selectedRegion.classList.add(isCorrect ? "is-correct" : "is-wrong");
    if (!isCorrect && correctRegion) correctRegion.classList.add("is-correct");
  }

  findRegion(key) {
    return this.regions.find((region) => String(region.getAttribute(this.keyAttribute)) === String(key));
  }
}
