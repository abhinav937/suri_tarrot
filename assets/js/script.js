// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Enhanced Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#' || href === '#!') {
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            // Get navbar height for offset
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            
            // Calculate target position
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Smooth scroll with fallback
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Fallback for older browsers
                smoothScrollFallback(targetPosition);
            }
            
            // Update URL without jumping (optional)
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        }
    });
});

// Fallback smooth scroll function for older browsers
function smoothScrollFallback(targetPosition) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // milliseconds
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// Smooth scroll on page load if there's a hash in the URL
window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            setTimeout(() => {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// Navbar scroll effect with smooth transitions
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    // Add smooth transition to navbar
    navbar.style.transition = 'box-shadow 0.3s ease, background 0.3s ease';
    
    // Throttled scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
            
            lastScroll = currentScroll;
        }, 10);
    }, { passive: true });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and pricing cards
document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Venmo profile URL
const venmoProfileUrl = 'https://www.venmo.com/u/suri_tarot';

document.getElementById('venmo-link').href = venmoProfileUrl;

// Pricing Tabs Functionality
const pricingTabs = document.querySelectorAll('.pricing-tab');
const pricingTabContents = document.querySelectorAll('.pricing-tab-content');

if (pricingTabs.length > 0 && pricingTabContents.length > 0) {
    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            pricingTabs.forEach(t => t.classList.remove('active'));
            pricingTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Reset carousel scroll position when switching tabs
            const carousel = document.getElementById(targetTab).querySelector('.pricing-carousel');
            if (carousel) {
                carousel.scrollLeft = 0;
            }
        });
    });
}

// Pricing Carousel Navigation
document.querySelectorAll('.pricing-carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.pricing-carousel');
    const prevBtn = wrapper.querySelector('.carousel-btn-prev');
    const nextBtn = wrapper.querySelector('.carousel-btn-next');
    
    if (carousel && prevBtn && nextBtn) {
        // Get scroll amount based on card width
        const getScrollAmount = () => {
            const firstCard = carousel.querySelector('.pricing-card');
            if (!firstCard) return 0;
            
            const cardWidth = firstCard.offsetWidth;
            const cardStyle = window.getComputedStyle(firstCard);
            const marginRight = parseInt(cardStyle.marginRight) || 0;
            const gap = parseFloat(window.getComputedStyle(carousel).gap) || 20;
            
            // Scroll one card width plus gap for smooth snapping
            return cardWidth + gap;
        };
        
        // Smooth scroll to next/previous card
        const scrollToCard = (direction) => {
            const scrollAmount = getScrollAmount();
            const currentScroll = carousel.scrollLeft;
            const cardWidth = getScrollAmount();
            
            // Calculate target scroll position
            let targetScroll;
            if (direction === 'next') {
                targetScroll = currentScroll + cardWidth;
            } else {
                targetScroll = currentScroll - cardWidth;
            }
            
            // Use smooth scroll
            carousel.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        };
        
        // Previous button
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToCard('prev');
        });
        
        // Next button
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToCard('next');
        });
        
        // Touch-friendly button handling for mobile
        prevBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToCard('prev');
        }, { passive: false });
        
        nextBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToCard('next');
        }, { passive: false });
        
        // Show/hide navigation buttons based on scroll position
        const updateButtonVisibility = () => {
            const scrollLeft = carousel.scrollLeft;
            const scrollWidth = carousel.scrollWidth;
            const clientWidth = carousel.clientWidth;
            const threshold = 5; // Small threshold for edge detection
            
            const isAtStart = scrollLeft <= threshold;
            const isAtEnd = scrollLeft >= scrollWidth - clientWidth - threshold;
            
            // Update previous button
            if (isAtStart) {
                prevBtn.style.opacity = '0.4';
                prevBtn.style.pointerEvents = 'none';
                prevBtn.setAttribute('disabled', 'true');
                prevBtn.setAttribute('aria-disabled', 'true');
            } else {
                prevBtn.style.opacity = '0.95';
                prevBtn.style.pointerEvents = 'auto';
                prevBtn.removeAttribute('disabled');
                prevBtn.setAttribute('aria-disabled', 'false');
            }
            
            // Update next button
            if (isAtEnd) {
                nextBtn.style.opacity = '0.4';
                nextBtn.style.pointerEvents = 'none';
                nextBtn.setAttribute('disabled', 'true');
                nextBtn.setAttribute('aria-disabled', 'true');
            } else {
                nextBtn.style.opacity = '0.95';
                nextBtn.style.pointerEvents = 'auto';
                nextBtn.removeAttribute('disabled');
                nextBtn.setAttribute('aria-disabled', 'false');
            }
        };
        
        // Throttled scroll handler for better performance
        let scrollTimeout;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateButtonVisibility, 50);
        };
        
        // Update on scroll
        carousel.addEventListener('scroll', handleScroll, { passive: true });
        
        // Update on resize
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateButtonVisibility();
            }, 250);
        };
        
        window.addEventListener('resize', handleResize, { passive: true });
        
        // Initial check
        updateButtonVisibility();
        
        // Update after images load (if any)
        carousel.addEventListener('load', updateButtonVisibility, true);
        
        // Update when carousel becomes visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateButtonVisibility();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(carousel);
    }
});

// Enhanced touch/swipe support for carousel on mobile
// Native scroll with momentum works better with scroll-snap, so we keep it minimal
document.querySelectorAll('.pricing-carousel').forEach(carousel => {
    // Prevent button clicks from interfering with scroll
    const buttons = carousel.closest('.pricing-carousel-wrapper')?.querySelectorAll('.carousel-btn');
    
    if (buttons) {
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', (e) => {
                // Allow button touch but prevent scroll interference
                e.stopPropagation();
            }, { passive: true });
        });
    }
    
    // Ensure smooth scrolling on touch devices
    carousel.style.touchAction = 'pan-x';
    carousel.style.WebkitOverflowScrolling = 'touch';
    
    // Add momentum scrolling enhancement
    let isScrolling = false;
    let scrollTimer;
    
    carousel.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
        }
        
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            isScrolling = false;
        }, 150);
    }, { passive: true });
});

// Services Accordion for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceToggles = document.querySelectorAll('.service-toggle');
    const serviceHeaders = document.querySelectorAll('.service-header-mobile');
    
    // Toggle service card on button click
    serviceToggles.forEach((toggle, index) => {
        const card = serviceCards[index];
        
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleServiceCard(card, toggle);
        });
    });
    
    // Toggle service card on header click (for better mobile UX)
    serviceHeaders.forEach((header, index) => {
        const card = serviceCards[index];
        const toggle = serviceToggles[index];
        
        header.addEventListener('click', (e) => {
            // Only toggle if click wasn't on the button itself
            if (!e.target.closest('.service-toggle')) {
                toggleServiceCard(card, toggle);
            }
        });
    });
    
    function toggleServiceCard(card, toggle) {
        const isActive = card.classList.contains('active');
        
        // Close all other cards (optional: uncomment if you want only one open at a time)
        // serviceCards.forEach((otherCard, otherIndex) => {
        //     if (otherCard !== card) {
        //         otherCard.classList.remove('active');
        //         serviceToggles[otherIndex].setAttribute('aria-expanded', 'false');
        //     }
        // });
        
        if (isActive) {
            card.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        } else {
            card.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
            
            // Smooth scroll to card if needed (optional)
            setTimeout(() => {
                const cardTop = card.getBoundingClientRect().top + window.pageYOffset;
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = cardTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
    
    // Handle resize to reset accordion state if needed
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Reset accordion on desktop (if window is resized from mobile to desktop)
            if (window.innerWidth > 768) {
                serviceCards.forEach((card, index) => {
                    card.classList.add('active'); // Show all on desktop
                    serviceToggles[index].setAttribute('aria-expanded', 'true');
                });
            }
        }, 250);
    }, { passive: true });
});

// Calendly integration note
// To set up Calendly:
// 1. Go to https://calendly.com and create a free account
// 2. Create your event types (Mehendi Service, Tarot Reading, etc.)
// 3. Get your Calendly username
// 4. Replace "your-username" in the HTML with your actual username
// 5. The widget will automatically load your scheduling page

// Example: If your Calendly URL is https://calendly.com/suri-services
// Replace data-url="https://calendly.com/your-username" 
// with data-url="https://calendly.com/suri-services"

