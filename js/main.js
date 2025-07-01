// Particle Background Effect
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(217, 78, 78, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Floating Elements Animation
function animateFloatingElements() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        const speed = parseFloat(icon.getAttribute('data-speed')) || 1;
        
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.clientX * speed) / 100;
            const y = (window.innerHeight - e.clientY * speed) / 100;
            
            icon.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
        });
    });
}

// 3D Tilt Effect for Project Cards
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Project Modal Functionality
const projectData = {
    amazon: {
        title: "Amazon Clone",
        badge: "Featured",
        description: "A full-stack e-commerce platform that replicates Amazon's core functionality. Built with modern web technologies to provide a seamless shopping experience with advanced features like user authentication, payment processing, and product management.",
        image: "assets/logos/31epF-8N9LL.png",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "Express", "Redux"],
        features: [
            "User authentication and authorization",
            "Product catalog with search and filtering",
            "Shopping cart and wishlist functionality",
            "Secure payment processing with Stripe",
            "Order management and tracking",
            "Admin dashboard for product management",
            "Responsive design for all devices"
        ],
        challenges: "The biggest challenge was implementing a robust payment system that handles multiple payment methods securely. I solved this by integrating Stripe's API with proper error handling and implementing a comprehensive order management system that tracks payment status and order fulfillment.",
        demoLink: "https://amazon-frontend-clone-com.netlify.app/",
        githubLink: "https://github.com/HakimcHuu/amazon-clone"
    },
    netflix: {
        title: "Netflix Clone",
        badge: "Popular",
        description: "A modern streaming platform clone that mimics Netflix's user interface and functionality. Features a responsive design with movie browsing, search capabilities, and a dynamic content display system.",
        image: "assets/logos/netflix.jpg",
        tech: ["React", "CSS3", "MovieDB API", "JavaScript", "Responsive Design"],
        features: [
            "Movie and TV show browsing",
            "Advanced search and filtering",
            "Responsive design for all screen sizes",
            "Dynamic content loading",
            "Movie details and trailers",
            "Category-based browsing",
            "Modern UI/UX design"
        ],
        challenges: "Creating a responsive design that works seamlessly across all devices was the main challenge. I implemented CSS Grid and Flexbox with media queries to ensure the layout adapts perfectly to different screen sizes while maintaining the Netflix aesthetic.",
        demoLink: "https://luminous-kitsune-f7545e.netlify.app",
        githubLink: "https://github.com/HakimcHuu/netflix-clone"
    },
    evangadi: {
        title: "Evangadi Forum",
        badge: "Community",
        description: "A community-driven Q&A platform built with Next.js and modern web technologies. Features real-time updates, user authentication, and a comprehensive discussion system for knowledge sharing.",
        image: "assets/logos/evangadi.png",
        tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "NextAuth", "Tailwind CSS"],
        features: [
            "User authentication and profiles",
            "Question and answer system",
            "Real-time updates and notifications",
            "Voting and reputation system",
            "Category-based organization",
            "Search and filtering capabilities",
            "Responsive community interface"
        ],
        challenges: "Implementing real-time features while maintaining good performance was challenging. I used Next.js API routes with Prisma for database operations and implemented efficient caching strategies to ensure fast response times and smooth user experience.",
        demoLink: "https://evangadi-forum-3.vercel.app/",
        githubLink: "https://github.com/HakimcHuu/evangadi-forum"
    },
    apple: {
        title: "Apple Clone",
        badge: "Design",
        description: "A premium product showcase website that replicates Apple's signature design aesthetic. Features smooth animations, modern UI elements, and a focus on visual storytelling and product presentation.",
        image: "assets/logos/apple.png",
        tech: ["React", "CSS3", "JavaScript", "Animations", "Responsive Design"],
        features: [
            "Product showcase with animations",
            "Smooth scrolling and transitions",
            "Modern UI/UX design",
            "Responsive layout for all devices",
            "Interactive product galleries",
            "Premium visual effects",
            "Apple-inspired typography"
        ],
        challenges: "Recreating Apple's signature smooth animations and premium feel was the biggest challenge. I implemented CSS animations, transforms, and carefully crafted transitions to achieve the fluid, high-quality user experience that Apple is known for.",
        demoLink: "https://apple-clone-three-rosy.vercel.app/",
        githubLink: "https://github.com/HakimcHuu/apple-clone"
    },
    evangadiMenu: {
        title: "Evangadi Menu",
        badge: "Menu",
        description: "A modern restaurant menu web app that allows users to browse dishes, view details, and order online. Built for speed, responsiveness, and a seamless dining experience.",
        image: "assets/logos/istockphoto-1267161539-612x612.jpg",
        tech: ["React", "CSS3", "Responsive", "Vercel"],
        features: [
            "Menu browsing with categories",
            "Online ordering system",
            "Responsive design for all devices",
            "Modern UI/UX",
            "Fast performance"
        ],
        challenges: "Ensuring a smooth and responsive user experience across all devices was a key challenge. I optimized the UI for mobile and desktop, and implemented efficient state management for fast menu browsing and ordering.",
        demoLink: "https://evangadi-menu-pi.vercel.app/",
        githubLink: "https://github.com/yourusername/evangadi-menu" // Replace with actual repo if available
    },
    zoom: {
        title: "Zoom Clone",
        badge: "Video",
        description: "A video conferencing platform that enables real-time communication with features like video calls, screen sharing, and chat functionality. Built with WebRTC for peer-to-peer communication.",
        image: "assets/misc/zoom.jpeg",
        tech: ["React", "WebRTC", "Socket.io", "Node.js", "Express", "PeerJS"],
        features: [
            "Real-time video and audio calls",
            "Screen sharing functionality",
            "Chat system with file sharing",
            "Room creation and joining",
            "User authentication",
            "Responsive design",
            "Cross-platform compatibility"
        ],
        challenges: "Implementing WebRTC for peer-to-peer video communication was the most complex part. I had to handle connection establishment, media streaming, and fallback mechanisms for different network conditions while ensuring low latency and high-quality video.",
        demoLink: "#",
        githubLink: "#"
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalBadge').textContent = project.badge;
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalChallenges').textContent = project.challenges;
    
    // Update tech stack
    const techStack = document.getElementById('modalTechStack');
    techStack.innerHTML = project.tech.map(tech => `<span>${tech}</span>`).join('');
    
    // Update features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update links
    const demoLink = document.getElementById('modalDemoLink');
    const githubLink = document.getElementById('modalGithubLink');
    
    if (projectId === 'zoom') {
        demoLink.style.display = 'none';
        githubLink.style.display = 'none';
    } else {
        demoLink.href = project.demoLink;
        demoLink.onclick = function() {
            window.open(project.demoLink, '_blank');
        };
        githubLink.href = project.githubLink;
        githubLink.onclick = function() {
            window.open(project.githubLink, '_blank');
        };
        demoLink.style.display = 'flex';
        githubLink.style.display = 'flex';
    }
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeProjectModal();
    }
});

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
        closeProjectModal();
    }
    });
});

// Enhanced Loading Screen Management
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Initialize cool effects after loading
                initParticles();
                animateFloatingElements();
                initTiltEffect();
            }, 500);
        }, 1500);
    }
});

// Scroll Progress Indicator
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Typing Animation
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

// Initialize typing animation after page load
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        typeWriter(typingElement, originalText, 150);
    }
});

// Smooth scrolling for navigation links
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

// CV Download handling
const downloadCVButton = document.querySelector('.download-cv');
if (downloadCVButton) {
    downloadCVButton.addEventListener('click', function(e) {
        // Check if the file exists
        fetch(this.href)
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    alert('CV file not found. Please contact me directly for my resume.');
                }
            })
            .catch(error => {
                e.preventDefault();
                alert('CV file not found. Please contact me directly for my resume.');
            });
    });
}

// Enhanced Form submission handling with better UX
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Show loading state
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Clear previous messages
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        
        // Send form data to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Success - Show success message
                showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                // Error - Show error message
                showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            }
        })
        .catch(error => {
            // Error handling
            showFormMessage('Network error. Please check your connection and try again.', 'error');
            console.error('Form submission error:', error);
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    });
}

// Enhanced form message display
function showFormMessage(message, type = 'info') {
    const formMessage = document.getElementById('form-message');
    
    if (!formMessage) return;
    
    // Clear any existing messages
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    
    // Create message content
    const messageContent = document.createElement('div');
    messageContent.className = `message-content message-${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 
                    type === 'error' ? 'fas fa-exclamation-circle' : 
                    'fas fa-info-circle';
    
    const text = document.createElement('span');
    text.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'message-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.onclick = () => {
        formMessage.classList.remove('show');
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 300);
    };
    
    messageContent.appendChild(icon);
    messageContent.appendChild(text);
    messageContent.appendChild(closeBtn);
    
    formMessage.appendChild(messageContent);
    formMessage.classList.add('show');
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        if (formMessage.classList.contains('show')) {
            formMessage.classList.remove('show');
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 300);
        }
    }, 4000);
}

// Skills Progress Bars Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Animate stats with counting effect
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const finalValue = parseInt(statNumber.textContent);
                const duration = 2000; // 2 seconds
                const increment = finalValue / (duration / 16); // 60fps
                let currentValue = 0;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        currentValue = finalValue;
                        clearInterval(timer);
                    }
                    statNumber.textContent = Math.floor(currentValue) + '+';
                }, 16);
                
                observer.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Add hover effects to social icons
function initSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add pulse animation to status indicator
function initStatusIndicator() {
    const statusDot = document.querySelector('.status-dot');
    if (statusDot) {
        setInterval(() => {
            statusDot.style.transform = 'scale(1.2)';
            setTimeout(() => {
                statusDot.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
}

// Add typing effect to personal motto
function initPersonalMotto() {
    const motto = document.querySelector('.personal-motto p');
    if (motto) {
        const text = motto.textContent;
        motto.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                motto.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing when the element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(motto);
    }
}

// Add hover effects to availability card
function initAvailabilityCard() {
    const availabilityCard = document.querySelector('.availability-card');
    if (availabilityCard) {
        availabilityCard.addEventListener('mouseenter', () => {
            availabilityCard.style.transform = 'translateY(-5px)';
        });
        
        availabilityCard.addEventListener('mouseleave', () => {
            availabilityCard.style.transform = 'translateY(0)';
        });
    }
}

// Initialize all new interactive elements
function initNewElements() {
    animateProgressBars();
    animateStats();
    initSocialIcons();
    initStatusIndicator();
    initPersonalMotto();
    initAvailabilityCard();
    animateSkillsProgress();
    animateTimeline();
}

// Add scroll-based animations for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced navigation with active state and smooth transitions
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('.header');
    
    // Header scroll effect - DISABLED to keep header fixed
    // if (header) {
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // }
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Add offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // If we're at the very top, default to home
    if (scrollPosition < 200) {
        currentSection = 'home';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href').slice(1);
        if (linkHref === currentSection) {
            link.classList.add('active');
        }
    });
});

// Enhanced mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Set initial active navigation state
    const sections = document.querySelectorAll('section');
    const navLinksElements = document.querySelectorAll('.nav-links a');
    
    // Default to home if at the top
    if (window.scrollY < 200) {
        navLinksElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    }
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            this.classList.toggle('active');
        });
        
        // Close menu when a nav link is clicked
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            }
        });
    }
});

// Enhanced fade-in animations with better performance
document.addEventListener('DOMContentLoaded', () => {
    // Make hero section visible immediately
    document.querySelector('.hero').classList.add('visible');
    
    // Initialize new interactive elements
    initNewElements();
    
    // Intersection Observer for fade-in sections (excluding hero)
    const fadeInSections = document.querySelectorAll('section:not(.hero), .tech-item, .service-card, .contact-form > *, .contact-cta > *');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeInSections.forEach((section, index) => {
        if (!section.closest('.hero')) { // Extra check to exclude hero section elements
            section.classList.add('fade-in');
            section.style.setProperty('--i', index % 5); // Stagger animations
            sectionObserver.observe(section);
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu or modal
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.getElementById('nav-toggle');
        const modal = document.getElementById('project-modal');
        
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        }
        
        if (modal && modal.style.display === 'block') {
            closeProjectModal();
        }
    }
    
    // Ctrl/Cmd + K to scroll to top
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Add touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Swipe up to show back to top button
    if (diff > swipeThreshold && window.pageYOffset > 300) {
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            backToTopButton.classList.add('visible');
        }
    }
}

// Live Demo Modal Functions
function openLiveDemo(url) {
    const modal = document.getElementById('live-demo-modal');
    const iframe = document.getElementById('demo-frame');
    const demoLink = document.getElementById('demo-link');
    
    iframe.src = url;
    demoLink.href = url;
    modal.style.display = 'block';
    
    // Add animation class
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeLiveDemo() {
    const modal = document.getElementById('live-demo-modal');
    const iframe = document.getElementById('demo-frame');
    
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        iframe.src = '';
    }, 300);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('live-demo-modal');
    const demoContent = document.querySelector('.demo-content');
    
    if (event.target === modal) {
        closeLiveDemo();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('live-demo-modal');
        if (modal.style.display === 'block') {
            closeLiveDemo();
        }
    }
});

// Skills Progress Dashboard Animation
function animateSkillsProgress() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    // Add entrance animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3D Tilt Effect for Project Cards
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // Enhanced hover effects for project cards
    projectCards.forEach(card => {
        const overlay = card.querySelector('.card-overlay');
        const content = card.querySelector('.card-content');
        
        card.addEventListener('mouseenter', () => {
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'translateY(0)';
            }
            if (content) {
                content.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (overlay) {
                overlay.style.opacity = '0';
                overlay.style.transform = 'translateY(20px)';
            }
            if (content) {
                content.style.transform = 'translateY(0)';
            }
        });
    });

    // Smooth scroll for filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectsGrid = document.querySelector('.projects-grid');
            if (projectsGrid) {
                projectsGrid.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  if (logo) {
    const svgText = logo.querySelector('svg text');
    if (svgText) {
      // Set initial class for slow animation
      svgText.classList.add('slow-monogram');
      logo.addEventListener('mouseenter', function() {
        svgText.classList.remove('slow-monogram');
        svgText.classList.add('typing-monogram');
      });
      logo.addEventListener('mouseleave', function() {
        svgText.classList.remove('typing-monogram');
        // Force reflow to restart slow animation
        void svgText.offsetWidth;
        svgText.classList.add('slow-monogram');
      });
    }
  }
}); 