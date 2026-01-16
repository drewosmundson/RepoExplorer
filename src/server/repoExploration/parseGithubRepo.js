export function parseGitHubUrl(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return { owner: match[1], repo: match[2].replace('.git', '') };
    }
  throw new Error('Invalid GitHub URL');
}
