const currentYear = document.getElementById('currentYear');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });
}

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (name && email && message) {
      formFeedback.textContent = 'Mensagem enviada com sucesso!';
      contactForm.reset();
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 3500);
    } else {
      formFeedback.textContent = 'Por favor, preencha todos os campos.';
    }
  });
}
