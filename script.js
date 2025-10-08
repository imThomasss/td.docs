// TD Scripts Documentation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeResourceCards();
    initializeAnimations();
    initializeSidebar();
    initializeScrollSpy();
});

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Handle navigation
            const target = this.getAttribute('href').substring(1);
            handleNavigation(target);
        });
    });
}

function handleNavigation(target) {
    switch(target) {
        case 'home':
            scrollToSection('.hero');
            break;
        case 'resources':
            scrollToSection('.resources-section');
            break;
        case 'support':
            scrollToSection('.support-section');
            break;
        case 'overview':
            scrollToSection('#overview');
            break;
        case 'installation':
            scrollToSection('#installation');
            break;
        case 'configuration':
            scrollToSection('#configuration');
            break;
        case 'features':
            scrollToSection('#features');
            break;
    }
}

function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Sidebar Navigation
function initializeSidebar() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sidebar links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Handle navigation
            const target = this.getAttribute('href').substring(1);
            scrollToSection('#' + target);
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });
    });
}

// Scroll Spy
function initializeScrollSpy() {
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Resource Cards
function initializeResourceCards() {
    const resourceCards = document.querySelectorAll('.resource-card:not(.coming-soon)');
    
    resourceCards.forEach(card => {
        card.addEventListener('click', function() {
            const resourceName = this.querySelector('h4').textContent.toLowerCase().replace('td-', '');
            openResource(resourceName);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function openResource(resourceName) {
    switch(resourceName) {
        case 'store':
            // Open TD-Store documentation in new tab
            window.open('https://imthomasss.github.io/docs.td-store.github-io/', '_blank');
            break;
        case 'dmv':
            // Open TD-DMV documentation (same site)
            window.location.href = 'td-dmv.html';
            break;
        case 'td-queue':
            // Open TD-Queue documentation (same site)
            window.location.href = 'td-queue.html';
            break;
        case 'applicationportal':
            // Open TD-ApplicationPortal documentation (same site)
            window.location.href = 'TD-ApplicationPortal.html';
            break;
        default:
            // For future resources, open their respective pages
            if (resourceName) {
                window.location.href = `${resourceName}.html`;
            }
            break;
    }
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.resource-card, .feature-card, .section-header');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll-based header styling
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .resource-card,
    .feature-card,
    .section-header {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .resource-card.animate-in,
    .feature-card.animate-in,
    .section-header.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .resource-card {
        transition: all 0.3s ease;
    }
    
    .resource-card:hover {
        transform: translateY(-4px) !important;
    }
    
    .feature-card {
        transition: all 0.3s ease;
    }
    
    .feature-card:hover {
        transform: translateY(-2px) !important;
    }
`;
document.head.appendChild(style);
