document.addEventListener('DOMContentLoaded', function() {
    // Categories dropdown functionality
    const categoriesDropdown = document.querySelector('.categories-dropdown');
    const categoriesPanel = document.querySelector('.categories-panel');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroText = document.querySelector('.hero-text');
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const createAccountLink = document.getElementById('createAccountLink');
    const loginForm = document.getElementById('loginForm');
    const loginFields = document.querySelectorAll('.login-field');
    const registerFields = document.querySelectorAll('.register-field');

    // Categories dropdown functionality
    categoriesDropdown.addEventListener('click', function(event) {
        if (categoriesPanel.style.display === 'block') {
            categoriesPanel.style.display = 'none';
        } else {
            categoriesPanel.style.display = 'block';
        }
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!categoriesDropdown.contains(event.target)) {
            categoriesPanel.style.display = 'none';
        }
    });

    categoriesPanel.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    const categoryItems = document.querySelectorAll('.categories-panel ul li');
    categoryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    });

    // Smooth scroll for scroll indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact-bar');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Optional: Add animation for the hero text on page load
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        heroText.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 300);
    }

    // Optional: Parallax effect for background
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        const scrollPosition = window.pageYOffset;
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Modal elements
    const openModal = function() {
        loginModal.classList.add('active');
    };

    // Open modal when login or register buttons are clicked
    loginBtn.addEventListener('click', function() {
        openModal();
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        updateFormForLogin();
    });

    registerBtn.addEventListener('click', function() {
        openModal();
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        updateFormForRegister();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    // Tab switching functionality
    loginTab.addEventListener('click', function() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        updateFormForLogin();
    });

    registerTab.addEventListener('click', function() {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        updateFormForRegister();
    });

    // Create account link
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        updateFormForRegister();
    });

    // Password match validation
    const registerPassword = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Create password match indicator elements
    const passwordMatchIndicator = document.createElement('div');
    passwordMatchIndicator.className = 'password-match';
    passwordMatchIndicator.style.display = 'none';
    passwordMatchIndicator.textContent = 'Passwords match';
    
    const passwordMismatchIndicator = document.createElement('div');
    passwordMismatchIndicator.className = 'password-mismatch';
    passwordMismatchIndicator.style.display = 'none';
    passwordMismatchIndicator.textContent = 'Passwords do not match';
    
    // Append indicators after confirm password field
    confirmPassword.parentNode.appendChild(passwordMatchIndicator);
    confirmPassword.parentNode.appendChild(passwordMismatchIndicator);
    
    // Check password match on input
    function checkPasswordMatch() {
        if (confirmPassword.value === '') {
            passwordMatchIndicator.style.display = 'none';
            passwordMismatchIndicator.style.display = 'none';
        } else if (registerPassword.value === confirmPassword.value) {
            passwordMatchIndicator.style.display = 'block';
            passwordMismatchIndicator.style.display = 'none';
        } else {
            passwordMatchIndicator.style.display = 'none';
            passwordMismatchIndicator.style.display = 'block';
        }
    }
    
    registerPassword.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);
    
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check which form is active
        if (loginTab.classList.contains('active')) {
            // Login form processing
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            console.log('Login submitted with:', { email, password });
            // Close the modal after successful login
            loginModal.classList.remove('active');
        } else {
            // Register form processing
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validate that passwords match
            if (password !== confirmPassword) {
                passwordMismatchIndicator.style.display = 'block';
                return;
            }
            
            console.log('Registration submitted with:', { fullName, email, password });
            // Close the modal after successful registration
            loginModal.classList.remove('active');
        }
    });

    // Update form for login view
    function updateFormForLogin() {
        // Hide register fields, show login fields
        loginFields.forEach(field => field.style.display = 'block');
        registerFields.forEach(field => field.style.display = 'none');
        
        // Update button text and switch link
        document.querySelector('.auth-button').textContent = 'Log In';
        document.querySelector('.switch-prompt').textContent = "Don't have an account?";
        document.querySelector('.switch-link').textContent = 'Create an account';
    }

    // Update form for register view
    function updateFormForRegister() {
        // Hide login fields, show register fields
        loginFields.forEach(field => field.style.display = 'none');
        registerFields.forEach(field => field.style.display = 'block');
        
        // Update button text and switch link
        document.querySelector('.auth-button').textContent = 'Register';
        document.querySelector('.switch-prompt').textContent = 'Already have an account?';
        document.querySelector('.switch-link').textContent = 'Log in';
    }
});