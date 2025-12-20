/**
 * Fairplay Moving - Main JavaScript
 * Interactive functionality for moving service website
 */

class MovingApp {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.formData = {};
    this.inventory = {};
    
    this.init();
  }
  
  init() {
    this.initSelectorForm();
    this.initQuoteForm();
    this.initInventory();
    this.initAnimations();
    this.initMobileMenu();
  }
  
  /* ==========================================================================
     Selector Form (Hero Section)
     ========================================================================== */
  initSelectorForm() {
    const selectorContainer = document.querySelector('.selector_fieldsContainer');
    if (!selectorContainer) return;
    
    const fields = selectorContainer.querySelectorAll('.selector_field');
    
    fields.forEach(field => {
      const input = field.querySelector('input');
      if (input) {
        input.addEventListener('focus', () => {
          field.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
          if (!input.value) {
            field.classList.remove('focused');
          }
        });
        
        input.addEventListener('input', (e) => {
          this.updateQuoteButton(e.target.value);
        });
      }
    });
    
    // Book button click handler
    const bookButton = document.querySelector('.selector_book_button');
    if (bookButton) {
      bookButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToQuoteForm();
      });
    }
  }
  
  updateQuoteButton(value) {
    const button = document.querySelector('.selector_book_button');
    if (!button) return;
    
    if (value && value.length >= 5) {
      button.classList.add('ready');
    } else {
      button.classList.remove('ready');
    }
  }
  
  scrollToQuoteForm() {
    const quoteForm = document.querySelector('.quoteForm_container');
    if (quoteForm) {
      quoteForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  /* ==========================================================================
     Quote Form Multi-Step
     ========================================================================== */
  initQuoteForm() {
    const nextButtons = document.querySelectorAll('.quoteForm_nextButton');
    const backButtons = document.querySelectorAll('.quoteForm_backButton');
    
    nextButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextStep();
      });
    });
    
    backButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.prevStep();
      });
    });
    
    // Form submission
    const form = document.querySelector('.quoteForm_form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitForm();
      });
    }
  }
  
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.hideStep(this.currentStep);
      this.currentStep++;
      this.showStep(this.currentStep);
      this.updateProgress();
      this.collectFormData();
    }
  }
  
  prevStep() {
    if (this.currentStep > 1) {
      this.hideStep(this.currentStep);
      this.currentStep--;
      this.showStep(this.currentStep);
      this.updateProgress();
    }
  }
  
  hideStep(step) {
    const stepElement = document.querySelector(`[data-step="${step}"]`);
    if (stepElement) {
      stepElement.classList.remove('active');
    }
  }
  
  showStep(step) {
    const stepElement = document.querySelector(`[data-step="${step}"]`);
    if (stepElement) {
      stepElement.classList.add('active', 'fadeIn');
      
      // Focus first input
      const firstInput = stepElement.querySelector('input, select, textarea');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 300);
      }
    }
  }
  
  updateProgress() {
    const dots = document.querySelectorAll('.quoteForm_progressDot');
    dots.forEach((dot, index) => {
      if (index < this.currentStep) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    
    // Update navigation buttons
    const backButton = document.querySelector('.quoteForm_backButton');
    const nextButton = document.querySelector('.quoteForm_nextButton');
    
    if (backButton) {
      backButton.style.display = this.currentStep === 1 ? 'none' : 'block';
    }
    
    if (nextButton) {
      nextButton.textContent = this.currentStep === this.totalSteps ? 'Get Quote' : 'Next';
    }
  }
  
  collectFormData() {
    const currentStepElement = document.querySelector(`[data-step="${this.currentStep - 1}"]`);
    if (!currentStepElement) return;
    
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.name) {
        this.formData[input.name] = input.value;
      }
    });
  }
  
  /* ==========================================================================
     Inventory Management
     ========================================================================== */
  initInventory() {
    const toggleButton = document.querySelector('.inventory_toggle');
    const inventorySection = document.querySelector('.inventory_categories');
    
    if (toggleButton && inventorySection) {
      toggleButton.addEventListener('click', () => {
        inventorySection.classList.toggle('active');
        toggleButton.textContent = inventorySection.classList.contains('active') 
          ? 'Hide Inventory' 
          : 'Add Inventory';
      });
    }
    
    // Category expand/collapse
    const categoryHeaders = document.querySelectorAll('.inventory_categoryHeader');
    categoryHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const category = header.parentElement;
        const items = category.querySelector('.inventory_items');
        
        category.classList.toggle('expanded');
        items.style.display = category.classList.contains('expanded') ? 'grid' : 'none';
      });
    });
    
    // Inventory item selection
    const inventoryItems = document.querySelectorAll('.inventory_item');
    inventoryItems.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      
      if (checkbox && label) {
        // Update visual state
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            item.classList.add('selected');
            this.addToInventory(checkbox.value, label.textContent);
          } else {
            item.classList.remove('selected');
            this.removeFromInventory(checkbox.value);
          }
        });
        
        // Click on entire item
        item.addEventListener('click', (e) => {
          if (e.target !== checkbox && e.target !== label) {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
          }
        });
      }
    });
  }
  
  addToInventory(key, name) {
    this.inventory[key] = name;
    this.updateInventorySummary();
  }
  
  removeFromInventory(key) {
    delete this.inventory[key];
    this.updateInventorySummary();
  }
  
  updateInventorySummary() {
    const summary = document.querySelector('.inventory_summary');
    if (summary) {
      const count = Object.keys(this.inventory).length;
      summary.textContent = count > 0 ? `${count} items selected` : 'No items selected';
    }
  }
  
  /* ==========================================================================
     Form Submission
     ========================================================================== */
  async submitForm() {
    this.collectFormData();
    
    // Add inventory to form data
    this.formData.inventory = this.inventory;
    
    // Show loading state
    const submitButton = document.querySelector('.quoteForm_nextButton');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      // Replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });
      
      if (response.ok) {
        this.showSuccessMessage();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      this.showErrorMessage();
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }
  
  showSuccessMessage() {
    const form = document.querySelector('.quoteForm_form');
    if (form) {
      form.innerHTML = `
        <div class="quoteForm_success fadeIn">
          <div class="quoteForm_successIcon">✓</div>
          <h3>Quote Request Sent!</h3>
          <p>Thank you for your interest in Fairplay Moving. We'll contact you within 24 hours with your personalized moving quote.</p>
          <button type="button" class="quoteForm_restartButton" onclick="location.reload()">
            Start New Quote
          </button>
        </div>
      `;
    }
  }
  
  showErrorMessage() {
    const error = document.createElement('div');
    error.className = 'quoteForm_error';
    error.textContent = 'Sorry, there was an error sending your request. Please try again or call us directly.';
    
    const form = document.querySelector('.quoteForm_form');
    if (form) {
      form.appendChild(error);
      setTimeout(() => error.remove(), 5000);
    }
  }
  
  /* ==========================================================================
     Animations and Effects
     ========================================================================== */
  initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service_card, .about_section');
    animateElements.forEach(el => observer.observe(el));
    
    // Button hover effects
    const buttons = document.querySelectorAll('.selector_book_button, .quoteForm_nextButton');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
  }
  
  /* ==========================================================================
     Mobile Menu
     ========================================================================== */
  initMobileMenu() {
    const menuButton = document.querySelector('.navbar_menuButton');
    const mobileMenu = document.querySelector('.navbar_mobileMenu');
    const closeButton = document.querySelector('.navbar_closeButton');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (closeButton && mobileMenu) {
      closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }
  
  /* ==========================================================================
     Utility Methods
     ========================================================================== */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.movingApp = new MovingApp();
});

// Handle ZIP code input formatting
document.addEventListener('input', (e) => {
  if (e.target.matches('input[pattern="[0-9]*"]')) {
    e.target.value = e.target.value.replace(/\D/g, '');
  }
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    animation: slideInUp 0.6s ease-out forwards;
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
  
  .quoteForm_success {
    text-align: center;
    padding: 48px 24px;
  }
  
  .quoteForm_successIcon {
    width: 80px;
    height: 80px;
    background: var(--success-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;
    margin: 0 auto 24px;
  }
  
  .quoteForm_success h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--font-color);
  }
  
  .quoteForm_success p {
    color: var(--font-color-secondary);
    margin-bottom: 24px;
    line-height: 1.6;
  }
  
  .quoteForm_restartButton {
    background: var(--primary-blue);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .quoteForm_restartButton:hover {
    background: var(--primary-blue-dark);
  }
  
  .quoteForm_error {
    background: #fee;
    color: var(--error-red);
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 16px;
    text-align: center;
  }
  
  .inventory_item.selected {
    background: rgba(59, 130, 246, 0.1);
    border-color: var(--primary-blue);
  }
  
  .navbar_mobileMenu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 2000;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 24px;
  }
  
  .navbar_mobileMenu.active {
    right: 0;
  }
  
  .navbar_mobileMenuHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
  
  .navbar_mobileMenuItems {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .navbar_mobileMenuItems a {
    font-size: 18px;
    color: var(--font-color);
    text-decoration: none;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
  }
`;
document.head.appendChild(style);