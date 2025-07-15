// Mouse follower effect
document.addEventListener('mousemove', (e) => {
    const mouseFollower = document.querySelector('.mouse-follower');
    if (mouseFollower) {
        const x = e.clientX - 192; // Half of width (384px / 2)
        const y = e.clientY - 192; // Half of height (384px / 2)
        mouseFollower.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Navigation smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        if (target) {
            const element = document.getElementById(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Hero buttons smooth scrolling
document.querySelectorAll('.btn[data-target]').forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        if (target) {
            const element = document.getElementById(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// External link handler
function openLink(url) {
    window.open(url, '_blank');
}

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        const level = item.getAttribute('data-level');
        const progressBar = item.querySelector('.skill-progress');
        
        setTimeout(() => {
            if (progressBar) {
                progressBar.style.width = level + '%';
            }
        }, index * 200);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger skill bars animation when skills section is visible
            if (entry.target.classList.contains('skills-container')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.project-card, .contact-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    const slideLeftElements = document.querySelectorAll('.about-card');
    slideLeftElements.forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });
    
    const slideRightElements = document.querySelectorAll('.skills-container');
    slideRightElements.forEach(el => {
        el.classList.add('slide-in-right');
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Glitch effect for logo
document.getElementById('nav-logo').addEventListener('mouseenter', function() {
    this.style.animation = 'glitchTitle 0.5s ease-out';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.project-overlay');
        const links = this.querySelector('.project-links');
        
        if (overlay) overlay.style.opacity = '1';
        if (links) links.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.project-overlay');
        const links = this.querySelector('.project-links');
        
        if (overlay) overlay.style.opacity = '0.8';
        if (links) links.style.opacity = '0.8';
    });
});

// Status indicator animation
document.addEventListener('DOMContentLoaded', () => {
    const statusDot = document.querySelector('.status-dot');
    const statusBar = document.querySelector('.status-bar');
    
    if (statusDot && statusBar) {
        setInterval(() => {
            statusDot.style.transform = 'scale(1.2)';
            statusBar.style.transform = 'scaleY(1.2)';
            
            setTimeout(() => {
                statusDot.style.transform = 'scale(1)';
                statusBar.style.transform = 'scaleY(1)';
            }, 200);
        }, 2000);
    }
});

// Particle animation enhancement
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        particle.addEventListener('mouseenter', () => {
            particle.style.transform = 'scale(1.5)';
            particle.style.opacity = '0.8';
        });
        
        particle.addEventListener('mouseleave', () => {
            particle.style.transform = 'scale(1)';
            particle.style.opacity = '0.3';
        });
    });
});

