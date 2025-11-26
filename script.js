// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Fechar menu ao clicar em um link (no mobile)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});
