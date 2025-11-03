document.addEventListener('DOMContentLoaded', function() {
    const inPageNav = document.getElementById('inPageNav');
    const contentStart = document.querySelector('.content-wrapper');

    // 2. Asegurarse que los elementos existan en esta página
    if (!inPageNav || !contentStart) {
        return; 
    }

    const threshold = contentStart.offsetTop - 100;
    function toggleNavVisibility() {
        if (window.scrollY > threshold) {
            // Si el usuario ha bajado lo suficiente, muestra el menú
            inPageNav.classList.add('visible');
        } else {
            // Si está arriba, oculta el menú
            inPageNav.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggleNavVisibility);
});