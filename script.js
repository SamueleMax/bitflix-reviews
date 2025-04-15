document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // Read More functionality for reviews
    const readMoreLinks = document.querySelectorAll('.read-more');
    const fullReviews = document.querySelectorAll('.full-review');
    
    readMoreLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all full reviews
            fullReviews.forEach(review => {
                review.style.display = 'none';
            });
            
            // Show the selected review
            fullReviews[index].style.display = 'block';
            
            // Scroll to the full review
            window.scrollTo({
                top: fullReviews[index].offsetTop + 750,
                behavior: 'smooth'
            });
        });
    });
});
