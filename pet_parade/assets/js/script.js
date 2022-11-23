function sendMail() {
  const link =
    'mailto:diasermekbaev342@gmail.com' +
    `?cc=${document.getElementById('email').value}` +
    '&subject=' +
    encodeURIComponent(document.getElementById('name').value) +
    '&body=' +
    encodeURIComponent(document.getElementById('question').value);
  window.location.href = link;
}

const button = document.getElementById('send');
// button.addEventListener('click', sendMail);
