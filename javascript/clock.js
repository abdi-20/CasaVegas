document.addEventListener('DOMContentLoaded', function() {

    // Seleccionamos los elementos que necesitamos
    var clockBar = document.getElementById('clock-bar');
    var clockDisplay = document.getElementById('clock-display');
    var header = document.querySelector('header');

    // --- Función para actualizar la hora ---
    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');

        // Formato HH:MM:SS
        clockDisplay.textContent = hours + ':' + minutes + ':' + seconds;
    }

    // --- Función para posicionar la barra del reloj ---
    function positionClockBar() {
        // Obtiene la altura actual del header (que cambia con el scroll)
        var headerHeight = header.offsetHeight;
        // Posiciona la barra del reloj justo debajo del header
        clockBar.style.top = headerHeight + 'px';
    }

    // 1. Actualiza el reloj inmediatamente y luego cada segundo
    updateClock(); 
    setInterval(updateClock, 1000); 

    // 2. Posiciona la barra del reloj al cargar la página
    positionClockBar(); 

    // 3. Vuelve a posicionar si el usuario hace scroll (el header cambia de tamaño)
    window.addEventListener('scroll', positionClockBar);
    // 4. Vuelve a posicionar si el usuario cambia el tamaño de la ventana
    window.addEventListener('resize', positionClockBar);
});