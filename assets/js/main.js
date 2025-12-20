// Main JavaScript for Chicago Pro Movers
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero mini form handling
    const heroMiniForm = document.getElementById('heroMiniForm');
    if (heroMiniForm) {
        heroMiniForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fromZip = document.getElementById('heroFromZip').value.trim();
            const toZip = document.getElementById('heroToZip').value.trim();
            
            if (fromZip.length === 5 && toZip.length === 5) {
                // Store ZIP codes in sessionStorage to pass to main form
                sessionStorage.setItem('fromZip', fromZip);
                sessionStorage.setItem('toZip', toZip);
                
                // Redirect to booking page
                window.location.href = '/book-now/';
            } else {
                showNotification('Please enter valid 5-digit ZIP codes.', 'error');
                
                // Highlight error fields
                if (fromZip.length !== 5) {
                    document.getElementById('heroFromZip').classList.add('error');
                }
                if (toZip.length !== 5) {
                    document.getElementById('heroToZip').classList.add('error');
                }
            }
        });
        
        // Remove error class when typing
        ['heroFromZip', 'heroToZip'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', function() {
                    this.classList.remove('error');
                });
            }
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scroll for anchor links
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
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current FAQ item
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Form validation and submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class after user starts typing
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    }, { once: true });
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Thank you! We\'ll contact you soon.', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
    
    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
            }
            this.value = value;
        });
    });
    
    // ZIP code validation
    const zipInputs = document.querySelectorAll('input[pattern="[0-9]*"]');
    zipInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
    });
    
    // Service area checking
    const zipCheckForm = document.querySelector('.zip-check-form');
    if (zipCheckForm) {
        zipCheckForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const zipInput = this.querySelector('input[name="zip"]');
            const zip = zipInput.value.trim();
            
            if (zip.length === 5) {
                checkServiceArea(zip);
            } else {
                showNotification('Please enter a valid 5-digit ZIP code.', 'error');
            }
        });
    }
    
    // Intersection Observer for animations
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
    document.querySelectorAll('.service-card, .area-card, .testimonial, .pricing-card').forEach(el => {
        observer.observe(el);
    });
    
    // Utility functions
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            fontWeight: '500',
            zIndex: '9999',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });
        
        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    function checkServiceArea(zip) {
        // Mock service area check - in real implementation, this would make an API call
        const serviceAreas = [
            '60601', '60602', '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610',
            '60611', '60612', '60613', '60614', '60615', '60616', '60617', '60618', '60619', '60620',
            '60621', '60622', '60623', '60624', '60625', '60626', '60628', '60629', '60630', '60631',
            '60632', '60633', '60634', '60636', '60637', '60638', '60639', '60640', '60641', '60642',
            '60643', '60644', '60645', '60646', '60647', '60649', '60651', '60652', '60653', '60654',
            '60655', '60656', '60657', '60659', '60660', '60661', '60663', '60664', '60665', '60667',
            '60668', '60669', '60670', '60671', '60672', '60673', '60674', '60675', '60677', '60678',
            '60679', '60680', '60681', '60682', '60684', '60685', '60686', '60687', '60688', '60689',
            '60690', '60691', '60693', '60694', '60695', '60696', '60697', '60699', '60701'
        ];
        
        if (serviceAreas.includes(zip)) {
            showNotification(`Great! We serve your area (ZIP: ${zip}). Get your free quote now!`, 'success');
        } else {
            showNotification(`Sorry, we don't currently serve ZIP code ${zip}. Please call us for nearby areas.`, 'error');
        }
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .navbar.scrolled {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        input.error {
            border-color: #ef4444 !important;
        }
        
        .notification {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
    `;
    document.head.appendChild(style);
});
