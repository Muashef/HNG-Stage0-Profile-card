//time update
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if(timeElement) {
    timeElement.textContent = Date.now();
  }
}
updateTime();
setInterval(updateTime, 1000);

// Contact form validation
const contactForm = document.querySelector('form.contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');
    if(successMessage) successMessage.textContent = '';

    const name = document.querySelector('[data-testid="test-contact-name"]');
    const email = document.querySelector('[data-testid="test-contact-email"]');
    const subject = document.querySelector('[data-testid="test-contact-subject"]');
    const message = document.querySelector('[data-testid="test-contact-message"]');

    if(!name.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Name is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Email is required';
      isValid = false;
    } else if(!emailPattern.test(email.value.trim())) {
      document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Invalid email';
      isValid = false;
    }

    if(!subject.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required';
      isValid = false;
    }

    if(!message.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message is required';
      isValid = false;
    } else if(message.value.trim().length < 10) {
      document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters';
      isValid = false;
    }

    if(isValid) {
      if(successMessage) successMessage.textContent = 'Your message has been sent successfully!';
      contactForm.reset();
    }
  });
}