/* PTMin 2027 – drobne skrypty. Strona działa także bez nich. */
(function () {
  // Adres e-mail składany w przeglądarce (ochrona przed botami)
  document.querySelectorAll('.js-email').forEach(function (a) {
    var addr = a.getAttribute('data-user') + '@' + a.getAttribute('data-domain');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
  });
})();
