// GSAP ScrollTrigger Initialization
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Global variables for FPS counter and scroll speed
let frameCount = 0;
let lastTime = performance.now();
let fps = 0;
let scrollSpeed = 0;
let lastScrollTop = window.pageYOffset;

// Helper function for color conversion
function hexToRgb(hex) {
    // Remove # if exists
    hex = hex.replace('#', '');
    
    // Convert hex to rgb
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// Main initialization function
function initParallaxShowcase() {
    // Initialize all parallax effects
    initHeroParallax();
    initLayersParallax();
    initDepthParallax();
    initSpeedParallax();
    initAdvancedParallax();
    initVideoOnScroll();
    initSmoothScrolling();
    initAnimations();
}

// Hero Section Parallax
function initHeroParallax() {
    // Parallax for background layers
    const heroLayers = document.querySelectorAll('.hero-background .parallax-layer');
    
    heroLayers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed);
        
        gsap.to(layer, {
            yPercent: -30 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Title animation
    const titleLines = document.querySelectorAll('.title-line');
    
    gsap.fromTo(titleLines, 
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".hero",
                start: "top center",
                end: "center center",
                scrub: 1
            }
        }
    );

    // SVG paths animation
    const heroPaths = document.querySelectorAll('.hero-path, .hero-path-2');
    
    gsap.fromTo(heroPaths,
        {
            strokeDashoffset: 1000
        },
        {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".hero",
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        }
    );

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: -30,
            rotation: 360,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });
}

// Multi-Layer Parallax
function initLayersParallax() {
    const layers = document.querySelectorAll('.layers-container .parallax-layer');
    
    layers.forEach((layer, index) => {
        const speed = parseFloat(layer.dataset.speed);
        const content = layer.querySelector('.layer-content');
        
        // LAYER 3 FURTHER LEFT-BOTTOM
        const positions = [
            { x: -250, y: -180 },  // Top-Left
            { x: 160, y: -140 },   // Top-Right
            { x: -80, y: 150 },   // Bottom-Left - FURTHER than before (-40, 100)
            { x: 110, y: 50 }      // Bottom-Right
        ];
        
        // Parallax for layer with FIXED positions
        gsap.to(layer, {
            xPercent: positions[index].x * speed,
            yPercent: positions[index].y * speed,
            ease: "none",
            scrollTrigger: {
                trigger: ".layers-section",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // Content animation
        gsap.fromTo(content,
            {
                opacity: 0,
                scale: 0.8,
                y: 50
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1
                }
            }
        );
    });
}

// Depth Parallax - FIXED - ALL LAYERS VISIBLE (COMING SOON - NOT READY YET)
function initDepthParallax() {
    const depthLayers = document.querySelectorAll('.depth-layer');
    
    depthLayers.forEach((layer, index) => {
        const speed = parseFloat(layer.dataset.speed);
        
        // MUCH LARGER parallax effects for each depth layer - FULL SCREEN
        const effects = [
            { y: -120, scale: 1.8 }, // Mountains - far - FULL SCREEN - MORE
            { y: -80, scale: 1.5 },  // Clouds - medium - FULL SCREEN - MORE
            { y: -50, scale: 1.3 },  // Trees - closer - FULL SCREEN - MORE
            { y: -20, scale: 1.1 }   // Foreground - closest - FULL SCREEN
        ];
        
        gsap.to(layer, {
            yPercent: effects[index].y * speed,
            scale: effects[index].scale,
            ease: "none",
            scrollTrigger: {
                trigger: ".depth-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Content animation
    const depthContent = document.querySelector('.depth-content');
    
    gsap.fromTo(depthContent,
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: depthContent,
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1
            }
        }
    );
}

// Speed Variations Parallax
function initSpeedParallax() {
    const speedItems = document.querySelectorAll('.speed-item');
    
    speedItems.forEach((item, index) => {
        const speed = parseFloat(item.dataset.speed);
        
        // Different parallax effects for different speeds
        const effects = [
            { y: -30, scale: 1.05 },  // Slow
            { y: -160, scale: 1.2 },  // Medium
            { y: -300, scale: 1.4 }   // Fast
        ];
        
        gsap.to(item, {
            yPercent: effects[index].y,
            scale: effects[index].scale,
            ease: "none",
            scrollTrigger: {
                trigger: ".speed-section",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });


    });
}

// Advanced Parallax
function initAdvancedParallax() {
    const advancedContainer = document.querySelector('.advanced-container');
    const advancedLayers = document.querySelectorAll('.advanced-layer');
    const advancedPaths = document.querySelectorAll('.advanced-path, .advanced-path-2, .advanced-path-3');
    
    // Parallax for layers
    advancedLayers.forEach((layer, index) => {
        const speed = parseFloat(layer.dataset.speed);
        
        gsap.to(layer, {
            yPercent: -50 * speed,
            xPercent: 20 * speed,
            rotation: 5 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: ".advanced-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // SVG paths animation with shadow in their color
    advancedPaths.forEach((path, index) => {
        const originalColor = getComputedStyle(path).stroke;
        const originalWidth = parseFloat(getComputedStyle(path).strokeWidth) || 2;
        
        // Animation for stroke-dashoffset, stroke width and brightness
        gsap.fromTo(path,
            {
                strokeDashoffset: 2000,
                strokeWidth: 0.5,
                filter: "drop-shadow(0 0 0px rgba(255,255,255,0))"
            },
            {
                strokeDashoffset: 0,
                strokeWidth: originalWidth * 2,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8))",
                duration: 3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".advanced-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    onUpdate: (self) => {
                        // Dynamic effects based on scroll progress
                        const shadowIntensity = self.progress * 0.8;
                        const shadowColor = originalColor || "#ffffff";
                        
                        // Convert hex to rgb for shadow
                        let shadowRgb = "255,255,255";
                        if (shadowColor.startsWith('#')) {
                            const r = parseInt(shadowColor.slice(1, 3), 16);
                            const g = parseInt(shadowColor.slice(3, 5), 16);
                            const b = parseInt(shadowColor.slice(5, 7), 16);
                            shadowRgb = `${r},${g},${b}`;
                        } else if (shadowColor.startsWith('rgb')) {
                            shadowRgb = shadowColor.match(/\d+/g).slice(0, 3).join(',');
                        }
                        
                        // Create brighter version of the original color for glow effect
                        let glowRgb = shadowRgb;
                        if (shadowColor.startsWith('#')) {
                            const r = Math.min(255, parseInt(shadowColor.slice(1, 3), 16) + (self.progress * 100));
                            const g = Math.min(255, parseInt(shadowColor.slice(3, 5), 16) + (self.progress * 100));
                            const b = Math.min(255, parseInt(shadowColor.slice(5, 7), 16) + (self.progress * 100));
                            glowRgb = `${r},${g},${b}`;
                        } else if (shadowColor.startsWith('rgb')) {
                            const colors = shadowColor.match(/\d+/g).slice(0, 3).map(c => Math.min(255, parseInt(c) + (self.progress * 100)));
                            glowRgb = colors.join(',');
                        }
                        
                        // Combine shadow and glow effects in original color
                        path.style.filter = `drop-shadow(0 0 ${10 + self.progress * 20}px rgba(${glowRgb}, ${shadowIntensity}))`;
                    }
                }
            }
        );
    });

    // SVG container animation
    gsap.to(advancedContainer, {
        scale: 1.1,
        rotation: 2,
        ease: "none",
        scrollTrigger: {
            trigger: ".advanced-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });


}

// Function to update FPS and scroll speed
function updatePerformanceMetrics() {
    // FPS update
    function updateFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    updateFPS();
    
    // Scroll speed update
    function updateScrollSpeed() {
        const currentScrollTop = window.pageYOffset;
        const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
        scrollSpeed = Math.round(scrollDelta);
        lastScrollTop = currentScrollTop;
        
        setTimeout(updateScrollSpeed, 100);
    }
    
    updateScrollSpeed();
}

// Video on Scroll - FIXED - WORKS BETTER
function initVideoOnScroll() {
    const video = document.getElementById('scroll-video');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const timeDisplay = document.querySelector('.time-display');
    
    if (!video) return;
    
    // Time formatting
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    // ScrollTrigger for video
    ScrollTrigger.create({
        trigger: ".video-scroll-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
            if (video.duration) {
                video.currentTime = video.duration * self.progress;
                
                // UI update
                const progress = Math.round(self.progress * 100);
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `${progress}%`;
                
                const currentTime = formatTime(video.currentTime);
                const totalTime = formatTime(video.duration);
                timeDisplay.textContent = `${currentTime} / ${totalTime}`;
            }
        }
    });
}

// Smooth Scrolling with GSAP
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // GSAP smooth scroll with easing
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 50
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Scroll to the next section (layers)
            const layersSection = document.querySelector('#layers');
            
            if (layersSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: layersSection,
                        offsetY: 50
                    },
                    ease: "power2.inOut"
                });
            }
        });
    }

    // Add smooth scroll to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 50
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Animation initialization
function initAnimations() {
    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        gsap.to('.scroll-line', {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // CTA button animation
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Floating elements animation in hero
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: -20,
            rotation: 360,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    // Section headers animations
    initSectionHeaders();
}

// Section headers animations
function initSectionHeaders() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        gsap.fromTo(header,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: header.closest('section'),
                    start: "top 80%",
                    end: "center center",
                    scrub: 1
                }
            }
        );
    });
}

// Performance optimization
function optimizePerformance() {
    // Throttling for scroll events
    function updateOnScroll() {
        // Update only when needed
        requestAnimationFrame(() => {
            // Update code
        });
    }
    
    // Resize handler
    function handleResize() {
        ScrollTrigger.refresh();
    }
    
    window.addEventListener('resize', handleResize);
}

// Initialization after DOM load
document.addEventListener('DOMContentLoaded', () => {
    initParallaxShowcase();
    updatePerformanceMetrics();
    optimizePerformance();
});