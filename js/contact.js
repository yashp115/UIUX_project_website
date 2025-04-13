document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful submission
            console.log('Form submitted!', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Add floating label effect for textarea
    const textarea = document.querySelector('.form-group textarea');
    if (textarea) {
        textarea.addEventListener('focus', function() {
            this.setAttribute('placeholder', ' ');
        });

        textarea.addEventListener('blur', function() {
            this.setAttribute('placeholder', '');
        });
    }
}); 