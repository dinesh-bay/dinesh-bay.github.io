(function () {
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  var html = document.documentElement;
  var stored = localStorage.getItem('theme');

  if (stored) {
    html.setAttribute('data-theme', stored);
  }

  function updateLabel() {
    var current = html.getAttribute('data-theme') || 'dark';
    toggle.textContent = current === 'dark' ? '☀ light' : '☾ dark';
  }

  updateLabel();

  toggle.addEventListener('click', function () {
    var current = html.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel();
  });
})();
