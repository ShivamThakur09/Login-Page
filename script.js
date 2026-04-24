document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('.Username').value;
        const password = document.querySelector('.Password').value;
        // Add your login logic here
    });
});
