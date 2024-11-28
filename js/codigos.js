const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');

document.querySelectorAll('.abre-form').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'flex';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
