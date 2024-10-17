

// Get all links in the navbar
const navLinks = document.querySelectorAll('.nav-links ul li a');

// Get the current URL path
const currentPage = window.location.pathname;

// Loop through each link and add the 'active' class to the matching page
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (link.getAttribute('href') === 'index.html' && currentPage === '/')) {
        link.classList.add('active');
    }
});






