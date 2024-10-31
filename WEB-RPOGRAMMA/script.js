// Modālo logu atvēršana
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

// Modālo logu aizvēršana
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Automātiska modālo logu aizvēršana, ja lietotājs nospiež ārpus modālā loga
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

// Hamburgera izvēlne
const menuIcon = document.getElementById('menuIcon');
const navbarLinks = document.getElementById('navbarLinks');

menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});

// Dark Mode pārslēdzējs
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
