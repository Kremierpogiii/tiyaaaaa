const giftButton = document.getElementById('gift-button');
const letterDialog = document.getElementById('letter-dialog');
const closeLetter = document.getElementById('letter-close');
let openingTimer;

giftButton.addEventListener('click', () => {
  if (giftButton.disabled || letterDialog.open) return;
  giftButton.disabled = true;
  giftButton.classList.add('is-open');
  const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 550;
  openingTimer = window.setTimeout(() => {
    letterDialog.showModal();
    giftButton.setAttribute('aria-expanded', 'true');
    giftButton.disabled = false;
  }, delay);
});

closeLetter.addEventListener('click', () => letterDialog.close());
letterDialog.addEventListener('click', (event) => {
  const bounds = letterDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) letterDialog.close();
});
letterDialog.addEventListener('close', () => {
  window.clearTimeout(openingTimer);
  giftButton.classList.remove('is-open');
  giftButton.setAttribute('aria-expanded', 'false');
  giftButton.disabled = false;
  giftButton.focus();
});
