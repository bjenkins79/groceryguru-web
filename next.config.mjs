/** @type {import('next').NextConfig} */
const nextConfig = {
  // This repo lives under ~/Desktop, which is an iCloud Drive symlink, so every file Next writes
  // gets synced. iCloud skips any path ending `.nosync`, and a build directory is regenerable, so
  // it has no business being backed up — 77 MB of churn, and each write is a chance for iCloud to
  // resolve a conflict by keeping BOTH copies as "name 2.ext". That is not hypothetical: the
  // sibling GroceryGuru repo had 49 such files committed to it.
  //
  // Vercel is deliberately left on the standard `.next`; it does not run on this filesystem, and
  // its cache/output conventions expect the default. Same split as Codex's next.config.ts.
  distDir: process.env.VERCEL ? '.next' : '.next.nosync',
};

export default nextConfig;
