document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const signUpModal = document.getElementById('signUpModal');
    const signInModal = document.getElementById('signInModal');

    // Get buttons that open the modals
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');

    // Get <span> elements that close the modals
    const closeSignUp = document.getElementById('closeSignUp');
    const closeSignIn = document.getElementById('closeSignIn');

    // Open sign-up modal
    signUpBtn.addEventListener('click', () => {
        signUpModal.style.display = 'block';
    });

    // Open sign-in modal
    signInBtn.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    // Close sign-up modal
    closeSignUp.addEventListener('click', () => {
        signUpModal.style.display = 'none';
    });

    // Close sign-in modal
    closeSignIn.addEventListener('click', () => {
        signInModal.style.display = 'none';
    });

    // Close modals when clicking outside modal content
    window.addEventListener('click', (event) => {
        if (event.target === signUpModal) {
            signUpModal.style.display = 'none';
        }
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
    });

    // Handle sign-up form submission
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signUpForm.signUpEmail.value.trim();
        const password = signUpForm.signUpPassword.value.trim();

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Basic email format validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Sign Up successful for ${email}`);
        signUpForm.reset();
        signUpModal.style.display = 'none';
    });

    // Handle sign-in form submission
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signInForm.signInEmail.value.trim();
        const password = signInForm.signInPassword.value.trim();

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Sign In successful for ${email}`);
        signInForm.reset();
        signInModal.style.display = 'none';
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
        return re.test(email);
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us, ' + contactForm.name.value + '!');
        contactForm.reset();
    });
});
