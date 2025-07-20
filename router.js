function loadPage(page) {
  fetch(`${page}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Page Not Found");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('content').src = html;
    })
    .catch(error => {
      document.getElementById('content').src = "<p>Failed to load the page.</p>";
    });
}

// ハッシュ（#）の変更を監視してページを切り替え
window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'home';
  loadPage(page);
});

// 最初の読み込み時も実行
window.addEventListener('DOMContentLoaded', () => {
  const page = location.hash.replace('#', '') || 'home';
  loadPage(page);
});
