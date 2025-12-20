// Chicago Pro Movers - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initFAQ();
    initForms();
    initBookingForm();
    initZIPChecker();
    initScrollEffects();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
    }
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('i');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = otherQuestion.parentElement.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('i');
                    otherAnswer.classList.add('hidden');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Form Handling
function initForms() {
    // Hero mini form
    const heroMiniForm = document.getElementById('heroMiniForm');
    if (heroMiniForm) {
        heroMiniForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fromZip = this.querySelector('input[name="fromZip"]').value.trim();
            const toZip = this.querySelector('input[name="toZip"]').value.trim();
            
            // Store ZIP codes and redirect to booking form
            localStorage.setItem('movingFromZip', fromZip);
            localStorage.setItem('movingToZip', toZip);
            window.location.href = '/book-now/';
        });
    }
    
    // CTA form
    const ctaForm = document.getElementById('ctaForm');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const zip = this.querySelector('input[name="zip"]').value.trim();
            
            // Store ZIP and redirect to booking form
            localStorage.setItem('movingFromZip', zip);
            window.location.href = '/book-now/';
        });
    }
}

// Booking Form Multi-Step
function initBookingForm() {
    let currentStep = 1;
    const totalSteps = 4;
    
    // Auto-fill ZIP codes if available
    const fromZipInput = document.querySelector('input[name="fromZip"]');
    const toZipInput = document.querySelector('input[name="toZip"]');
    
    if (fromZipInput && localStorage.getItem('movingFromZip')) {
        fromZipInput.value = localStorage.getItem('movingFromZip');
    }
    if (toZipInput && localStorage.getItem('movingToZip')) {
        toZipInput.value = localStorage.getItem('movingToZip');
    }
    
    // Set minimum date to today
    const moveDateInput = document.querySelector('input[name="moveDate"]');
    if (moveDateInput) {
        const today = new Date().toISOString().split('T')[0];
        moveDateInput.setAttribute('min', today);
    }
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showBookingSuccess();
        });
    }
}

// Step navigation functions
function nextStep() {
    if (validateCurrentStep()) {
        const currentStepEl = document.getElementById(`step${currentStep}`);
        currentStepEl.classList.add('hidden');
        currentStepEl.classList.remove('active');
        
        currentStep++;
        
        const nextStepEl = document.getElementById(`step${currentStep}`);
        nextStepEl.classList.remove('hidden');
        nextStepEl.classList.add('active');
        
        updateStepIndicators();
    }
}

function prevStep() {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    currentStepEl.classList.add('hidden');
    currentStepEl.classList.remove('active');
    
    currentStep--;
    
    const prevStepEl = document.getElementById(`step${currentStep}`);
    prevStepEl.classList.remove('hidden');
    prevStepEl.classList.add('active');
    
    updateStepIndicators();
}

function validateCurrentStep() {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const requiredFields = currentStepEl.querySelectorAll('[required]');
    
    for (let field of requiredFields) {
        if (!field.value.trim()) {
            field.focus();
            field.classList.add('border-red-500');
            setTimeout(() => field.classList.remove('border-red-500'), 3000);
            return false;
        }
    }
    return true;
}

function updateStepIndicators() {
    const indicators = document.querySelectorAll('.step-indicator');
    indicators.forEach((indicator, index) => {
        const stepNum = index + 1;
        indicator.classList.remove('active', 'completed');
        
        if (stepNum < currentStep) {
            indicator.classList.add('completed');
            indicator.style.backgroundColor = '#10b981';
            indicator.style.color = 'white';
        } else if (stepNum === currentStep) {
            indicator.classList.add('active');
            indicator.style.backgroundColor = '#2563eb';
            indicator.style.color = 'white';
        } else {
            indicator.style.backgroundColor = '#e5e7eb';
            indicator.style.color = '#6b7280';
        }
    });
}

// Inventory quantity updates
function updateQuantity(item, change) {
    const quantityEl = document.getElementById(`${item}-quantity`);
    let current = parseInt(quantityEl.textContent) || 0;
    current = Math.max(0, current + change);
    quantityEl.textContent = current;
}

// ZIP Code Checker
function initZIPChecker() {
    const zipChecker = document.getElementById('zipChecker');
    const zipResult = document.getElementById('zipResult');
    const zipMessage = document.getElementById('zipMessage');
    
    if (zipChecker) {
        zipChecker.addEventListener('submit', function(e) {
            e.preventDefault();
            const zip = this.querySelector('input[name="zip"]').value.trim();
            
            // Simulate ZIP code check
            const chicagoZips = [
                '60601', '60602', '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610',
                '60611', '60612', '60613', '60614', '60615', '60616', '60617', '60618', '60619', '60620',
                '60621', '60622', '60623', '60624', '60625', '60626', '60628', '60629', '60630', '60631',
                '60632', '60633', '60634', '60636', '60637', '60638', '60639', '60640', '60641', '60642',
                '60643', '60644', '60645', '60646', '60647', '60649', '60651', '60652', '60653', '60654',
                '60655', '60656', '60657', '60659', '60660', '60661'
            ];
            
            const suburbZips = [
                '60201', '60202', '60076', '60077', '60091', '60093', '60301', '60302', '60304', '60402',
                '60459', '60453', '60805', '60406', '60419', '60409', '60438', '60426', '60473', '60068',
                '60016', '60018', '60056', '60004', '60005', '60173', '60193', '60194', '60126', '60181',
                '60148', '60137', '60187', '60189'
            ];
            
            let message = '';
            let isSuccess = false;
            
            if (chicagoZips.includes(zip)) {
                message = `Great news! We serve ZIP code ${zip} in Chicago. Get your free quote now!`;
                isSuccess = true;
            } else if (suburbZips.includes(zip)) {
                message = `Excellent! We serve ZIP code ${zip} in the Chicago suburbs. Get your free quote!`;
                isSuccess = true;
            } else {
                message = `We may serve ZIP code ${zip}. Please call us at ${site.contact.phone} to confirm.`;
            }
            
            zipMessage.textContent = message;
            zipMessage.className = `p-4 rounded-lg ${isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-yellow-100 text-yellow-800 border border-yellow-200'}`;
            zipResult.classList.remove('hidden');
        });
    }
}

// Scroll Effects
function initScrollEffects() {
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
    
    // Add scroll-triggered animations
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
    
    // Observe elements for scroll animations
    document.querySelectorAll('.card, .service-card, .area-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility Functions
function showBookingSuccess() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-check text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h3>
            <p class="text-gray-600 mb-6">Thank you for choosing Chicago Pro Movers. We'll contact you within 24 hours with your detailed moving quote.</p>
            <button onclick="this.closest('.fixed').remove()" class="btn-primary">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 5000);
}

// Global site contact info (you can update this with actual values)
const site = {
    contact: {
        phone: '(312) 555-0123',
        email: 'info@chicagopromovers.com',
        address: '123 N Michigan Ave, Chicago, IL 60601'
    }
};