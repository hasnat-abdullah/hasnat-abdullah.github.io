/**
 * Reveal-on-scroll, plus the count-up on the metric figures.
 * Both are skipped entirely when the visitor asks for reduced motion.
 */
export function initReveal() {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const revealables = document.querySelectorAll<HTMLElement>('.rv');

  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('rv-in'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        const delay = Math.min(index, 5) * 70;
        setTimeout(() => entry.target.classList.add('rv-in'), delay);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  revealables.forEach((el) => revealObserver.observe(el));

  // Animates the last number in each metric label, leaving any surrounding
  // text ("40% → 98%", "11 engineers") intact.
  const countObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el = entry.target as HTMLElement;
        const full = el.textContent ?? '';
        const match = full.match(/(\d+)(?!.*\d)/);
        if (!match || match.index === undefined) return;

        const target = parseInt(match[1], 10);
        const head = full.slice(0, match.index);
        const tail = full.slice(match.index + match[1].length);
        const start = performance.now();
        const duration = 1100;

        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const value = Math.round(target * (1 - Math.pow(1 - t, 3)));
          el.textContent = head + value + tail;
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = full;
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el));
}
