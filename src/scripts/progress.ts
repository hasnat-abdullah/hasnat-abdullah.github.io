/**
 * The reading-progress tick under the header, plus scroll-spy on any nav or
 * table-of-contents links that point at an in-page anchor.
 */
export function initProgress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');

  const register = (selector: string, marker: 'true' | 'page') => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(selector));
    const byTarget = new Map<Element, Element[]>();

    for (const link of links) {
      const href = link.getAttribute('href') ?? '';
      const id = href.startsWith('#') ? href.slice(1) : null;
      if (!id) continue;
      const target = document.getElementById(id);
      if (!target) continue;
      const group = byTarget.get(target) ?? [];
      group.push(link);
      byTarget.set(target, group);
    }

    return { links, byTarget, marker };
  };

  const groups = [
    register('.navlinks a[href^="#"]', 'true'),
    register('.toc a[href^="#"]', 'true'),
  ].filter((group) => group.byTarget.size > 0);

  if (!bar && groups.length === 0) return;

  const onScroll = () => {
    if (bar) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    }

    for (const group of groups) {
      let current: Element | null = null;

      // The section whose box straddles the sticky header wins; if none does
      // (short sections, or scrolled past the last heading) fall back to the
      // last one that has started.
      for (const target of group.byTarget.keys()) {
        const rect = target.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom > 90) {
          current = target;
          break;
        }
        if (rect.top <= 90) current = target;
      }

      for (const link of group.links) link.removeAttribute('aria-current');
      if (current) {
        for (const link of group.byTarget.get(current) ?? []) {
          link.setAttribute('aria-current', group.marker);
        }
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}
