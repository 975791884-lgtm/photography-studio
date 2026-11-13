document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const originalText = button.textContent;

    button.textContent = '已提交';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1500);
  });
});
