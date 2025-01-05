// Obtenemos el botón del menú (imagen) y las opciones del menú
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Agregamos un evento de clic al botón para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Activa o desactiva el menú
});

