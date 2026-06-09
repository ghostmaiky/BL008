document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Retrieve saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark-theme';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('portfolio-theme', 'light-theme');
            updateThemeIcon('light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('portfolio-theme', 'dark-theme');
            updateThemeIcon('dark-theme');
        }
    });

    function updateThemeIcon(theme) {
        if (theme === 'light-theme') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // Time-based greeting message
    const greetingBadge = document.getElementById('greeting-badge');
    if (greetingBadge) {
        const hour = new Date().getHours();
        let greeting = 'Welcome to my space';
        if (hour < 12) greeting = '☀️ Good Morning';
        else if (hour < 18) greeting = '☕ Good Afternoon';
        else greeting = '🌙 Good Evening';
        greetingBadge.textContent = greeting;
    }

    // Navigation Active Link Tracking & Smooth Scroll Active Link Highlight
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function highlightNavigation() {
        let scrollPosition = window.scrollY + 150; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run on startup

    // Form Handling Simulation
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                // Success feedback
                formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
                formFeedback.className = 'form-feedback success';
                
                // Clear form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formFeedback.className = 'form-feedback hidden';
                }, 5000);
            }, 1200);
        });
    }
});
