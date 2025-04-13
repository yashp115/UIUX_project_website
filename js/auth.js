document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful signup
            console.log('Signup successful!', { username, email });
            alert('Signup successful! Redirecting to recipes...');
            window.location.href = 'recipes.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful login
            console.log('Login successful!', { email });
            alert('Login successful! Redirecting to recipes...');
            window.location.href = 'recipes.html';
        });
    }

    // Add floating label effect
    const inputs = document.querySelectorAll('.auth-form input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.setAttribute('placeholder', ' ');
        });

        input.addEventListener('blur', function() {
            this.setAttribute('placeholder', '');
        });
    });
}); 