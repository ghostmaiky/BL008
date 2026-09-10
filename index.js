/**
 * Portfolio Interactive Logic
 * ณัฐพงษ์ ปัดทุมมา (ออมแบงค์) - Personal Portfolio & TCAS Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Theme Switcher (Dark / Light Mode)
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

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
            themeToggleBtn.setAttribute('title', 'เปลี่ยนเป็นโหมดมืด (Dark Mode)');
        } else {
            themeIcon.className = 'fas fa-moon';
            themeToggleBtn.setAttribute('title', 'เปลี่ยนเป็นโหมดสว่าง (Light Mode)');
        }
    }

    // =========================================================================
    // 2. Mobile Navigation Toggle
    // =========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
            const isOpen = navMenu.classList.contains('nav-open');
            mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // =========================================================================
    // 3. Dynamic Time Greeting
    // =========================================================================
    const greetingBadge = document.getElementById('greeting-badge');
    if (greetingBadge) {
        const hour = new Date().getHours();
        let greeting = 'ยินดีต้อนรับสู่พอร์ตโฟลิโอ';
        if (hour >= 5 && hour < 12) {
            greeting = '☀️ สวัสดีตอนเช้า (Good Morning)';
        } else if (hour >= 12 && hour < 18) {
            greeting = '☕ สวัสดีตอนบ่าย (Good Afternoon)';
        } else {
            greeting = '🌙 สวัสดีตอนค่ำ (Good Evening)';
        }
        greetingBadge.innerHTML = `<i class="fas fa-sparkles"></i> ${greeting}`;
    }

    // =========================================================================
    // 4. Active Navigation Link Highlighting on Scroll
    // =========================================================================
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 160;

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

    window.addEventListener('scroll', highlightNavigation, { passive: true });
    highlightNavigation();

    // =========================================================================
    // 5. Skills Bar Animation via Intersection Observer
    // =========================================================================
    const progressFills = document.querySelectorAll('.progress-fill');
    let animatedSkills = false;

    function animateSkillsBars() {
        progressFills.forEach(bar => {
            const target = bar.getAttribute('data-progress');
            bar.style.width = `${target}%`;
        });
    }

    if ('IntersectionObserver' in window) {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animatedSkills) {
                        animateSkillsBars();
                        animatedSkills = true;
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(skillsSection);
        }
    } else {
        // Fallback for older browsers
        animateSkillsBars();
    }

    // =========================================================================
    // 6. Projects Grid Filter
    // =========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.classList.remove('filter-hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('filter-hidden');
                }
            });
        });
    });

    // =========================================================================
    // 7. Project Details Modal Logic
    // =========================================================================
    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCloseAction = document.querySelector('.modal-close-action');
    const openProjectButtons = document.querySelectorAll('.open-project-modal');

    // Project Data Dictionary
    const projectDetailsData = {
        'temp-monitor': {
            category: 'C# .NET & WinForms Desktop App',
            title: 'Temperature Monitoring Dashboard',
            icon: 'fas fa-thermometer-half',
            overview: 'แอปพลิเคชันบนคอมพิวเตอร์ที่พัฒนาด้วยภาษา C# Windows Forms เพื่อเชื่อมต่อและรับข้อมูลอุณหภูมิจากฮาร์ดแวร์เซนเซอร์ผ่าน Serial Port (COM) แบบ Real-time ตัวระบบมีฟังก์ชันคำนวณค่าเฉลี่ย ตรวจจับความร้อนเกินพิกัด และบันทึกประวัติย้อนหลัง',
            features: [
                'เชื่อมต่อ Serial Port อัตโนมัติ พร้อมตรวจจับ Baud Rate',
                'หน้าปัดแสดงอุณหภูมิแบบเรียลไทม์พร้อมกราฟแนวโน้ม (Chart Visualization)',
                'ระบบแจ้งเตือนเมื่ออุณหภูมิเกินค่าความปลอดภัยที่กำหนด (Threshold Alert)',
                'บันทึกประวัติอุณหภูมิลงในระบบ (Data Logging)'
            ],
            tags: ['C#', 'Windows Forms', '.NET Framework', 'SerialPort', 'Chart Controls']
        },
        'iot-controller': {
            category: 'Hardware & IoT Microcontroller',
            title: 'Smart IoT Sensor Controller',
            icon: 'fas fa-microchip',
            overview: 'โครงงานด้านสมองกลฝังตัวที่ใช้บอร์ด Arduino Uno ทำหน้าที่อ่านค่าสัญญาณจากเซนเซอร์ตรวจวัดอุณหภูมิและความชื้น ประมวลผลสัญญาณแอนะล็อกและดิจิทัล และส่งข้อมูลขึ้นสู่คอมพิวเตอร์ผ่านสายสื่อสารอย่างต่อเนื่อง',
            features: [
                'อ่านค่าสัญญาณแอนะล็อกและดิจิทัลจากเซนเซอร์อย่างแม่นยำ',
                'การแปลงระดับแรงดันไฟฟ้าและสัญญาณทางฟิสิกส์ให้เป็นองศาเซลเซียส',
                'คำนวณและกรองสัญญาณรบกวน (Noise Filtering / Sampling)',
                'โครงสร้างวงจรต้นแบบที่ต่อบน Breadboard สำหรับการทดลองในห้องปฏิบัติการ'
            ],
            tags: ['Arduino Uno', 'C/C++', 'Sensors', 'Embedded C', 'Hardware Circuit']
        },
        'web-portfolio': {
            category: 'Responsive Web Development',
            title: 'Online Personal Portfolio & TCAS',
            icon: 'fas fa-laptop-code',
            overview: 'เว็บไซต์แฟ้มสะสมผลงานและแนะนำตัวส่วนบุคคล สร้างขึ้นเพื่อเป็นพอร์ตโฟลิโอสำหรับยื่นเข้าศึกษาต่อในระดับมหาวิทยาลัย (TCAS) และนำเสนอผลงานสู่สาธารณะ ออกแบบตามหลัก Responsive Design และสไตล์ Glassmorphism',
            features: [
                'จัดระเบียบข้อมูลครบ 4 ส่วน: ประวัติส่วนตัว, ทักษะ (Skills Bar), ผลงาน (Projects Grid), ฟอร์มติดต่อกลับ',
                'ระบบ Skills Bar แอนิเมชันคำนวณตามระดับความชำนาญจริง',
                'ระบบกรองผลงานตามหมวดหมู่ (Filtering System)',
                'โหมดกลางคืนและกลางวัน (Dark/Light Theme) พร้อมจำค่าลง LocalStorage',
                'รองรับการเปิดดูบนสมาร์ตโฟน แท็บเล็ต และคอมพิวเตอร์อย่างลื่นไหล'
            ],
            tags: ['HTML5', 'CSS3 Modern Design', 'Vanilla JavaScript', 'UI/UX Design']
        },
        'media-game': {
            category: 'Creative Tech & Media',
            title: 'Interactive Game & Media Stream Setup',
            icon: 'fas fa-gamepad',
            overview: 'การบูรณาการเทคโนโลยีด้านมัลติมีเดีย การสตรีมมิงเกม การจัดระบบเสียงและภาพด้วย OBS Studio ตลอดจนการทดลองออกแบบตรรกะเกม (Game Logic) และงานดิจิทัลอาร์ตสำหรับส่วนประกอบอินเทอร์เฟซ',
            features: [
                'ตั้งค่าระบบ Live Streaming และการจัดการ Scene/Audio Bitrate ในระดับมืออาชีพ',
                'การออกแบบภาพกราฟิก ไอคอน และองค์ประกอบดิจิทัลอาร์ตประกอบการนำเสนอ',
                'ทดลองเขียนตรรกะมินิเกม การตรวจจับการชน (Collision) และระบบคะแนน',
                'การสื่อสารและสร้างปฏิสัมพันธ์กับผู้ชมในรูปแบบออนไลน์'
            ],
            tags: ['Game Logic', 'OBS Studio', 'Digital Drawing', 'Audio Processing']
        }
    };

    openProjectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            const data = projectDetailsData[projectKey];

            if (data) {
                document.getElementById('modal-category').textContent = data.category;
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-icon').className = data.icon;
                document.getElementById('modal-overview').textContent = data.overview;

                const featuresList = document.getElementById('modal-features');
                featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

                const tagsContainer = document.getElementById('modal-tags');
                tagsContainer.innerHTML = data.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

                projectModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeProjectModal() {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalCloseAction) modalCloseAction.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
    });

    // =========================================================================
    // 8. TCAS Resume Modal Logic
    // =========================================================================
    const resumeModal = document.getElementById('resume-modal');
    const openResumeBtn = document.getElementById('open-resume-btn');
    const aboutResumeTrigger = document.getElementById('about-resume-trigger');
    const resumeCloseBtn = document.getElementById('resume-close-btn');
    const resumeCloseAction = document.querySelector('.resume-close-action');

    function openResume() {
        resumeModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeResume() {
        resumeModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
    if (aboutResumeTrigger) aboutResumeTrigger.addEventListener('click', openResume);
    if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResume);
    if (resumeCloseAction) resumeCloseAction.addEventListener('click', closeResume);
    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) closeResume();
    });

    // Global ESC key to close any open modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeResume();
        }
    });

    // =========================================================================
    // 9. Interactive Contact Form with Validation & Feedback Toast
    // =========================================================================
    const contactForm = document.getElementById('contact-form');
    const formToast = document.getElementById('form-toast');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Form inputs
            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const subjectInput = document.getElementById('form-subject');
            const messageInput = document.getElementById('form-message');

            let isValid = true;

            // Name validation
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove('has-error');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('has-error');
            }

            // Subject validation
            if (!subjectInput.value) {
                subjectInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                subjectInput.parentElement.classList.remove('has-error');
            }

            // Message validation
            if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
                messageInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove('has-error');
            }

            if (!isValid) return;

            // Submit button loading animation
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="btn-text">กำลังส่งข้อความ...</span>
                <i class="fas fa-spinner fa-spin btn-icon"></i>
            `;

            // Simulate sending message asynchronously
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // Show toast notification
                formToast.classList.remove('hidden');
                document.getElementById('toast-title').textContent = `ขอบคุณครับ คุณ${nameInput.value.trim()}!`;
                document.getElementById('toast-msg').textContent = 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว ผมจะรีบตอบกลับผ่านอีเมลที่คุณระบุไว้โดยเร็วที่สุดครับ';

                // Reset form inputs
                contactForm.reset();

                // Auto-hide toast notification after 6 seconds
                setTimeout(() => {
                    formToast.classList.add('hidden');
                }, 6000);
            }, 1200);
        });

        // Clear error styling on input
        contactForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                field.parentElement.classList.remove('has-error');
            });
        });
    }
});
