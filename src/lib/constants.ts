// Base path for deployment
// Set to '' for custom domain (boviness.com) or local development
// Set to '/bovine' if using GitHub Pages subdirectory (username.github.io/bovine)
export const BASE_PATH = '';

export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
