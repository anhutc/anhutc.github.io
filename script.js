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