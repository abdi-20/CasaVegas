document.addEventListener('DOMContentLoaded', function() {
    const inPageNav = document.getElementById('inPageNav');
    if (!inPageNav) {
        return;
    }
    const threshold = 200; 
    function toggleNavVisibility() {
        if (window.scrollY > threshold) {
            inPageNav.classList.add('visible');
        } else {
            inPageNav.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggleNavVisibility);
});