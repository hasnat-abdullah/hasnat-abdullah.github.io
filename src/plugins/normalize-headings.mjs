/**
 * The posts were written over several years and disagree about what the top
 * heading level is: some start at `#`, others at `###`. The page itself owns
 * the `<h1>`, so each post's own top level is shifted to `<h2>` and the rest
 * follow in order. That keeps the type scale and the table of contents
 * consistent without editing the Markdown.
 *
 * A Sätteri mdast plugin: `before` runs once per document to measure the
 * shallowest heading, then the `heading` visitor applies the shift.
 */
export function normalizeHeadings() {
  let shift = 0;

  return {
    name: 'normalize-headings',

    before(root) {
      let min = 7;

      const walk = (node) => {
        if (!node) return;
        if (node.type === 'heading' && typeof node.depth === 'number') {
          if (node.depth < min) min = node.depth;
        }
        if (Array.isArray(node.children)) node.children.forEach(walk);
      };
      walk(root);

      shift = min <= 6 ? 2 - min : 0;
    },

    heading(node, context) {
      if (shift === 0) return;
      const depth = Math.min(6, Math.max(2, node.depth + shift));
      if (depth !== node.depth) context.setProperty(node, 'depth', depth);
    },
  };
}
