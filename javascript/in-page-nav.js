document.addEventListener('DOMContentLoaded', function() {
    const inPageNav = document.getElementById('inPageNav');
    if (!inPageNav) {
        return;
    }
    
    const navLinks = inPageNav.querySelectorAll('a');
    const sections = document.querySelectorAll('.content-section');
    const threshold = 200;
    let isMobile = window.innerWidth <= 768;
    
    // Detectar cambios en el tamaño de ventana
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
    });
    
    // Función para mostrar/ocultar el menú según el scroll
    function toggleNavVisibility() {
        if (window.scrollY > threshold) {
            inPageNav.classList.add('visible');
        } else {
            inPageNav.classList.remove('visible');
        }
    }
    
    // Función para resaltar la sección activa
    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            
            // Si la sección está en el viewport
            if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
                current = section.getAttribute('id');
            }
        });
        
        // Remover clase active de todos los links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Agregar clase active al link correspondiente
        if (current) {
            const activeLink = inPageNav.querySelector(`a[href="#${current}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
    
    // Función para hacer scroll suave al hacer click en un link
    function smoothScrollToSection(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 120; // Altura del header fijo
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // En móviles, cerrar el menú después de hacer click
            if (isMobile) {
                setTimeout(() => {
                    const ul = inPageNav.querySelector('ul');
                    if (ul) {
                        ul.classList.remove('show');
                    }
                }, 300);
            }
        }
    }
    
    // Agregar event listeners a los links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
    
    // Manejar click en el botón del menú en móvil
    inPageNav.addEventListener('click', function(e) {
        // Solo procesar si es móvil
        if (isMobile) {
            // Si se hace click en un link, no hacer nada adicional (ya se maneja en smoothScrollToSection)
            if (e.target.tagName === 'A') {
                return;
            }
            
            // Si se hace click en el botón mismo o en el contenedor
            const ul = inPageNav.querySelector('ul');
            if (ul) {
                const isVisible = ul.classList.contains('show');
                if (isVisible) {
                    ul.classList.remove('show');
                } else {
                    ul.classList.add('show');
                }
                e.stopPropagation();
            }
        }
    });
    
    // Event listeners para scroll
    window.addEventListener('scroll', function() {
        toggleNavVisibility();
        highlightActiveSection();
    });
    
    // Inicializar al cargar la página
    toggleNavVisibility();
    highlightActiveSection();
});