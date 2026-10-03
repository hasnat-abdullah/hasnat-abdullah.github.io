// Reading progress for blog posts: header bar + "N% read" in the sidebar.
export function initReadProgress() {
  const bar = document.querySelector<HTMLElement>('[data-read-progress]');
  const label = document.querySelector<HTMLElement>('[data-read-pct]');
  if (!bar && !label) return;

  let queued = false;
  const update = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
    if (bar) bar.style.transform = `scaleX(${pct})`;
    if (label) label.textContent = `${Math.round(pct * 100)}%`;
  };
  const schedule = () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  update();
}
