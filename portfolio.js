const contactForm = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  confirmation.textContent = `Thank you, ${name}! Your message has been sent.`;
  contactForm.reset();
});
