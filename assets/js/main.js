// Main JavaScript for Fairplay Moving
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Quote form handling
    const quoteForm = document.getElementById('quote-form');
    const quoteResult = document.getElementById('quote-result');
    const estimatedPrice = document.getElementById('estimated-price');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fromZip = document.getElementById('from-zip').value;
            const toZip = document.getElementById('to-zip').value;
            const moveSize = document.getElementById('move-size').value;
            const moveDate = document.getElementById('move-date').value;
            
            if (!fromZip || !toZip || !moveSize) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Calculate estimated price based on move size and distance
            const basePrices = {
                'studio': 350,
                '1-bedroom': 450,
                '2-bedroom': 650,
                '3-bedroom': 850,
                '4-bedroom': 1200
            };
            
            // Simple distance calculation (Chicago area ZIP codes)
            const distanceFactor = Math.abs(parseInt(toZip) - parseInt(fromZip)) / 100;
            const basePrice = basePrices[moveSize] || 500;
            const estimatedTotal = Math.round(basePrice + (distanceFactor * 50));
            
            estimatedPrice.textContent = `$${estimatedTotal} - $${estimatedTotal + 200}`;
            quoteResult.classList.remove('hidden');
            
            // Scroll to result
            quoteResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });
    
    // Set minimum date for move date input
    const moveDateInput = document.getElementById('move-date');
    if (moveDateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        moveDateInput.min = tomorrow.toISOString().split('T')[0];
    }
    
    // ZIP code validation
    const zipInputs = document.querySelectorAll('input[id$="-zip"]');
    zipInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Only allow numbers and limit to 5 digits
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 5);
        });
        
        input.addEventListener('blur', function() {
            if (this.value.length !== 5) {
                this.classList.add('border-red-500');
            } else {
                this.classList.remove('border-red-500');
                // Basic Chicago area ZIP code validation
                const chicagoZips = ['606', '607', '608', '601', '602', '603', '604', '605'];
                const isChicagoArea = chicagoZips.some(zip => this.value.startsWith(zip));
                if (!isChicagoArea) {
                    console.log('Note: ZIP code may be outside primary service area');
                }
            }
        });
    });
    
    // Booking form functionality (for book page)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(bookingForm);
            const bookingData = Object.fromEntries(formData);
            
            // Show confirmation modal
            showBookingConfirmation(bookingData);
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'bg-green-50 border border-green-200 rounded-lg p-4 mt-4';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <div>
                        <p class="font-semibold text-green-800">Message sent successfully!</p>
                        <p class="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                </div>
            `;
            
            contactForm.appendChild(successMessage);
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});

// Show booking confirmation modal
function showBookingConfirmation(bookingData) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md w-full">
            <div class="text-center mb-6">
                <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-green-500 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                <p class="text-gray-600">Thank you for choosing Fairplay Moving</p>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-gray-800 mb-2">Booking Details:</h4>
                <div class="text-sm text-gray-600 space-y-1">
                    <p><strong>Move Date:</strong> ${bookingData.moveDate}</p>
                    <p><strong>Size:</strong> ${bookingData.moveSize}</p>
                    <p><strong>From:</strong> ${bookingData.fromAddress}</p>
                    <p><strong>To:</strong> ${bookingData.toAddress}</p>
                </div>
            </div>
            
            <div class="text-center text-sm text-gray-600 mb-6">
                <p>We'll contact you within 2 hours to confirm details and answer any questions.</p>
            </div>
            
            <button onclick="this.closest('.fixed').remove()" class="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 10000);
}

// Utility function for showing notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-brand-blue';
    
    notification.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}