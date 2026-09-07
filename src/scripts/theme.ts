const STORAGE_KEY = 'hasnat-theme';

function read(): 'dark' | 'light' | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch {
    return null;
  }
}

function write(value: 'dark' | 'light') {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* Private browsing, or storage disabled — the choice just won't persist. */
  }
}

function paint(dark: boolean) {
  const root = document.documentElement;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');

  // Which icon shows is handled in CSS off the same data-theme attribute.
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
  for (const button of document.querySelectorAll<HTMLElement>('[data-theme-toggle]')) {
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }
}

export function initTheme() {
  // The inline head script already set data-theme; read it back rather than
  // recomputing, so the two can never disagree.
  let dark = document.documentElement.getAttribute('data-theme') === 'dark';
  paint(dark);

  for (const button of document.querySelectorAll<HTMLElement>('[data-theme-toggle]')) {
    button.addEventListener('click', () => {
      dark = !dark;
      write(dark ? 'dark' : 'light');
      paint(dark);
    });
  }

  // Follow the OS while the visitor has not made an explicit choice.
  const query = window.matchMedia?.('(prefers-color-scheme: dark)');
  query?.addEventListener('change', (event) => {
    if (read()) return;
    dark = event.matches;
    paint(dark);
  });
}
