// Base path for GitHub Pages deployment
// Set to '' for local development or custom domain, '/bovine' for GitHub Pages
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/bovine' : '';

export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
