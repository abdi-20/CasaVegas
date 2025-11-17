'use strict';

// Selecciona los botones
let nextButton = document.querySelector('.galeria-buttons .next');
let prevButton = document.querySelector('.galeria-buttons .prev');

// Lógica para el botón 'Siguiente'
nextButton.addEventListener('click', function(){
    // Obtiene todos los items y el contenedor
    let items = document.querySelectorAll('.slide .item');
    let slideContainer = document.querySelector('.slide');
    
    // Mueve el primer item al final de la lista
    slideContainer.appendChild(items[0]);
});

// Lógica para el botón 'Anterior'
prevButton.addEventListener('click', function(){
    // Obtiene todos los items y el contenedor
    let items = document.querySelectorAll('.slide .item');
    let slideContainer = document.querySelector('.slide');
    
    // Mueve el último item al principio de la lista
    slideContainer.prepend(items[items.length - 1]);
});