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
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
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
                top: fullReviews[index].offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Latest Reviews Button
    const ctaButton = document.querySelector('.cta-button');
    const reviewsSection = document.querySelector('#reviews');
    
    ctaButton.addEventListener('click', () => {
        window.scrollTo({
            top: reviewsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
    
    // Animations on scroll
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100 && sectionTop > -sectionHeight + 100) {
                section.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
});