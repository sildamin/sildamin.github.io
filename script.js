document.addEventListener('DOMContentLoaded', function() {

    // Cambia lo stile dell'header quando si scorre la pagina
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animazioni on-scroll con Intersection Observer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // L'animazione parte quando il 10% dell'elemento è visibile
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});