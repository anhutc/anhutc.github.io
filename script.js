

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen first
    showLoadingScreen();
    
    // Initialize all effects after a short delay
    setTimeout(() => {
        initializeUIEffects();
        initializeScrollEffects();
        initializeHoverEffects();
        startParticleSystem();
        shuffleLinks();
        
        // Hide loading screen after everything is ready
        setTimeout(() => {
            hideLoadingScreen();
        }, 1000);
    }, 500);
});



function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const sidebar = document.querySelector('.sidebar');
    const profileSection = document.querySelector('.profile-section');
    const linksSection = document.querySelector('.links-section');
    const footer = document.querySelector('.footer');
    
    if (loadingScreen) {
        // Make sure all sections are visible
        [sidebar, profileSection, linksSection, footer].forEach(element => {
            if (element) {
                element.style.opacity = '1';
                element.style.visibility = 'visible';
                element.style.transform = 'translateY(0)';
            }
        });
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Ensure all sections are fully visible
                [sidebar, profileSection, linksSection, footer].forEach(element => {
                    if (element) {
                        element.style.opacity = '1';
                        element.style.visibility = 'visible';
                        element.style.transform = 'translateY(0)';
                    }
                });
            }, 500);
        }, 1500);
    } else {
        // If no loading screen, ensure all sections are visible
        [sidebar, profileSection, linksSection, footer].forEach(element => {
            if (element) {
                element.style.opacity = '1';
                element.style.visibility = 'visible';
                element.style.transform = 'translateY(0)';
            }
        });
    }
}

function initializeEffects() {
    // Add reveal animations
    const elements = document.querySelectorAll('.profile-section, .links-section, .footer');
    elements.forEach(element => {
        element.classList.add('reveal');
    });
    
    // Trigger reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

function randomizeLinks() {
    const linksSection = document.querySelector('.links-section');
    if (!linksSection) return;
    
    // Get all link cards
    const linkCards = Array.from(linksSection.querySelectorAll('.link-card'));
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = linkCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [linkCards[i], linkCards[j]] = [linkCards[j], linkCards[i]];
    }
    
    // Remove all cards from the container
    linkCards.forEach(card => card.remove());
    
    // Add them back in the new random order
    linkCards.forEach(card => {
        linksSection.appendChild(card);
    });
    
    // Reset animation delays for the new order
    resetAnimationDelays();
}



function createSoundWave(element) {
    const wave = document.createElement('div');
    wave.className = 'sound-wave';
    element.appendChild(wave);
    
    setTimeout(() => {
        wave.remove();
    }, 600);
}

function createClickEffect(element) {
    // Add a temporary class for click feedback
    element.classList.add('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 200);
}

function createProfileClickEffect() {
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        // Create a burst of particles around the profile image
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createProfileParticle(profileImage);
            }, i * 50);
        }
    }
}

function createProfileParticle(profileImage) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#667eea';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    
    const rect = profileImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 50;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;
    
    particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

function addClickTracking() {
    // Add analytics tracking (you can integrate with Google Analytics, etc.)
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const platform = this.id.replace('-link', '');
            trackClick(platform);
        });
    });
}

function trackClick(platform) {
    // Simple console logging - replace with your analytics service
    console.log(`Link clicked: ${platform}`);
    
    // Example: Google Analytics tracking
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'click', {
    //         'event_category': 'social_links',
    //         'event_label': platform
    //     });
    // }
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .link-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .clicked {
        transform: scale(0.98) !important;
        transition: transform 0.1s ease !important;
    }
    
    /* Enhanced focus styles for accessibility */
    .link-card:focus {
        outline: 2px solid #667eea;
        outline-offset: 2px;
    }
    
    /* Smooth scrolling */
    html {
        scroll-behavior: smooth;
    }
    
    /* Performance optimizations */
    .link-card {
        will-change: transform;
    }
`;
document.head.appendChild(style);



// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Enhanced UI/UX Effects
function initializeUIEffects() {
    // Scroll Progress Bar
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
    
    // Mouse tracking for link cards
    document.addEventListener('mousemove', (e) => {
        const linkCards = document.querySelectorAll('.link-card');
        linkCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
    
    // Enhanced loading screen
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Loading...';
    document.querySelector('.loading-screen').appendChild(loadingText);
    
    // Particle burst on profile image click
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('click', (e) => {
            createParticleBurst(e.clientX, e.clientY, '#7877c6');
        });
    }
    
    // Sound wave effect on link clicks
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const platformColor = getComputedStyle(card).getPropertyValue('--platform-color');
            createSoundWaves(e.clientX, e.clientY, platformColor);
            createParticleBurst(e.clientX, e.clientY, platformColor);
        });
    });
    
    // Glitch effect on name hover
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.addEventListener('mouseenter', () => {
            nameElement.classList.add('glitch');
            nameElement.setAttribute('data-text', nameElement.textContent);
        });
        
        nameElement.addEventListener('mouseleave', () => {
            nameElement.classList.remove('glitch');
        });
    }
    
    // Neon border effect on link cards
    linkCards.forEach(card => {
        card.classList.add('neon-border');
    });
    
    // Tilt effect for link cards
    linkCards.forEach(card => {
        card.classList.add('tilt-card');
    });
    
    // Text reveal animation for bio
    const bioElement = document.querySelector('.bio');
    if (bioElement) {
        bioElement.classList.add('text-reveal');
    }
    
    // Morphing background
    const morphingBg = document.createElement('div');
    morphingBg.className = 'morphing-bg';
    document.body.appendChild(morphingBg);
}

function createParticleBurst(x, y, color) {
    const particleCount = 12;
    const colors = [color, '#f093fb', '#667eea', '#764ba2'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');
        particle.style.setProperty('--particle-color', colors[i % colors.length]);
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    }
}

function createSoundWaves(x, y, color) {
    const waveCount = 5;
    const colors = [color, '#f093fb', '#667eea', '#764ba2', '#f5576c'];
    
    for (let i = 0; i < waveCount; i++) {
        const wave = document.createElement('div');
        wave.className = 'sound-wave';
        
        wave.style.left = (x + i * 4 - 10) + 'px';
        wave.style.top = (y - 10) + 'px';
        wave.style.setProperty('--wave-color', colors[i % colors.length]);
        wave.style.animationDelay = (i * 0.1) + 's';
        
        document.body.appendChild(wave);
        
        setTimeout(() => {
            if (wave.parentNode) {
                wave.remove();
            }
        }, 500);
    }
}

// Enhanced loading screen with progress
function showLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = loadingScreen.querySelector('.loading-text');
    const loadingSteps = [
        'Initializing...',
        'Loading assets...',
        'Setting up effects...',
        'Almost ready...',
        'Welcome!'
    ];
    
    let currentStep = 0;
    const stepInterval = setInterval(() => {
        if (currentStep < loadingSteps.length) {
            loadingText.textContent = loadingSteps[currentStep];
            currentStep++;
        } else {
            clearInterval(stepInterval);
            setTimeout(() => {
                hideLoadingScreen();
            }, 500);
        }
    }, 800);
}

function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const container = document.querySelector('.container');
    
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }
    
    if (container) {
        container.style.opacity = '1';
        container.style.visibility = 'visible';
    }
}

// Enhanced particle system
function startParticleSystem() {
    const particleCount = 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-bg';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = opacity;
        
        document.body.appendChild(particle);
        
        particles.push({
            element: particle,
            x: x,
            y: y,
            speedX: speedX,
            speedY: speedY
        });
    }
    
    // Animate particles
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Enhanced scroll effects
function initializeScrollEffects() {
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
    
    // Observe all link cards
    document.querySelectorAll('.link-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Enhanced hover effects
function initializeHoverEffects() {
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            // Add floating effect
            card.style.animation = 'float 2s ease-in-out infinite';
            
            // Add glow effect
            card.style.boxShadow = `0 0 30px ${getComputedStyle(card).getPropertyValue('--platform-color')}`;
        });
        
        card.addEventListener('mouseleave', (e) => {
            // Remove floating effect
            card.style.animation = '';
            
            // Remove glow effect
            card.style.boxShadow = '';
        });
    });
}

// Shuffle links function
function shuffleLinks() {
    const linksSection = document.querySelector('.links-section');
    const linkCards = Array.from(linksSection.children);
    
    // Fisher-Yates shuffle
    for (let i = linkCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [linkCards[i], linkCards[j]] = [linkCards[j], linkCards[i]];
    }
    
    // Re-append shuffled cards
    linkCards.forEach(card => {
        linksSection.appendChild(card);
    });
    
    // Set animation delays for staggered appearance
    linkCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
} 