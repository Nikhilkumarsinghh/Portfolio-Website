document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch('/contact', {
      method: 'POST',
      body: new URLSearchParams(formData)
    })
    .then(res => res.json())
    .then(data => {
      alert('Thank you! Your message has been sent.');
      form.reset();
    })
    .catch(err => {
      alert('Error! Please try again later.');
      console.error(err);
    });
  });
});
