const $form = document.querySelector('main form');

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const phone = e.target.phone.value;

  const message = `Graça e paz, ${name}!`;

  window.open(`https://api.whatsapp.com/send?phone=55${phone}&text=${message}`);
});