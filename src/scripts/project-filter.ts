// Progressive enhancement: without JS every project is listed and the filter bar stays hidden.
export function initProjectFilter() {
  const bar = document.querySelector<HTMLElement>('[data-project-filters]');
  if (!bar) return;
  const buttons = [...bar.querySelectorAll<HTMLButtonElement>('button[data-filter]')];
  const items = [...document.querySelectorAll<HTMLElement>('[data-cats]')];
  const status = document.querySelector<HTMLElement>('[data-project-status]');

  const apply = (id: string) => {
    let shown = 0;
    for (const item of items) {
      const match = id === 'all' || (item.dataset.cats ?? '').split(' ').includes(id);
      item.hidden = !match;
      if (match) shown++;
    }
    for (const b of buttons) b.setAttribute('aria-pressed', String(b.dataset.filter === id));
    if (status) status.textContent = `Showing ${shown} project${shown === 1 ? '' : 's'}`;
  };

  bar.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('button[data-filter]');
    if (btn?.dataset.filter) apply(btn.dataset.filter);
  });
  bar.hidden = false;
}
