// Category filter + pagination for the blog index. State lives in the query string
// (?tag=…&page=…) so filtered views can be shared and survive reloads.
// Without JS, every post is listed and the pager stays hidden.
const PER_PAGE = 5;

export function initBlogIndex() {
  const root = document.querySelector<HTMLElement>('[data-blog-index]');
  if (!root) return;
  const items = [...root.querySelectorAll<HTMLElement>('[data-post-tag]')];
  const catButtons = [...root.querySelectorAll<HTMLButtonElement>('button[data-tag]')];
  const title = root.querySelector<HTMLElement>('[data-list-title]')!;
  const pager = root.querySelector<HTMLElement>('[data-pager]')!;
  const status = root.querySelector<HTMLElement>('[data-pager-status]')!;
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-next]')!;
  const pageNums = root.querySelector<HTMLElement>('[data-page-nums]')!;
  const known = new Set(catButtons.map((b) => b.dataset.tag!));

  const read = () => {
    const q = new URLSearchParams(location.search);
    const tag = q.get('tag') ?? 'All';
    const page = Number.parseInt(q.get('page') ?? '1', 10);
    return { tag: known.has(tag) ? tag : 'All', page: Number.isFinite(page) && page > 0 ? page : 1 };
  };

  const render = ({ tag, page }: { tag: string; page: number }) => {
    const matching = items.filter((el) => tag === 'All' || el.dataset.postTag === tag);
    const pages = Math.max(1, Math.ceil(matching.length / PER_PAGE));
    const pg = Math.min(page, pages);
    const start = (pg - 1) * PER_PAGE;
    const visible = new Set(matching.slice(start, start + PER_PAGE));
    for (const el of items) el.hidden = !visible.has(el);

    for (const b of catButtons) b.setAttribute('aria-pressed', String(b.dataset.tag === tag));
    title.textContent = tag === 'All' ? 'All articles' : tag;

    pager.hidden = pages <= 1;
    status.textContent = matching.length
      ? `Showing ${start + 1}–${start + visible.size} of ${matching.length}`
      : 'No articles';
    prev.disabled = pg === 1;
    next.disabled = pg === pages;
    prev.dataset.page = String(pg - 1);
    next.dataset.page = String(pg + 1);

    const nums = Array.from({ length: pages }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip-btn page-num';
      b.textContent = String(i + 1);
      b.dataset.page = String(i + 1);
      b.setAttribute('aria-label', `Page ${i + 1}`);
      if (i + 1 === pg) b.setAttribute('aria-current', 'page');
      return b;
    });
    pageNums.replaceChildren(...nums);
  };

  const go = (state: { tag: string; page: number }, push = true) => {
    const q = new URLSearchParams();
    if (state.tag !== 'All') q.set('tag', state.tag);
    if (state.page > 1) q.set('page', String(state.page));
    const url = `${location.pathname}${q.size ? `?${q}` : ''}`;
    if (push) history.pushState(null, '', url);
    render(state);
  };

  root.addEventListener('click', (e) => {
    const target = e.target as Element;
    const cat = target.closest<HTMLButtonElement>('button[data-tag]');
    if (cat) return go({ tag: cat.dataset.tag!, page: 1 });
    const pageBtn = target.closest<HTMLButtonElement>('button[data-page]');
    if (pageBtn && !pageBtn.disabled && !pageBtn.hasAttribute('aria-current')) {
      go({ tag: read().tag, page: Number(pageBtn.dataset.page) });
      root.scrollIntoView({ block: 'start' });
    }
  });
  window.addEventListener('popstate', () => render(read()));
  render(read());
}
