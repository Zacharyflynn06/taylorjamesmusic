// Prerender the entire site as static HTML.
// This makes Netlify Forms detect the booking form at build time
// (Netlify's form bot only scans static HTML in the deploy output),
// and also makes the site faster + cheaper (no Functions invocation).
export const prerender = true;
