function toggleAccordion(btn) {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  const body = btn.nextElementSibling;

  btn.setAttribute('aria-expanded', !isOpen);
  body.classList.toggle('open', !isOpen);
}

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#avatar-img');
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-ligth.png');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  }
}