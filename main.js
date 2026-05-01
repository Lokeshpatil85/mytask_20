// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Contact form validation (JS MINI PROJECT)
const contactForm = document.getElementById('contactForm');
const formMessageDiv = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            showMessage('Please fill all fields', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Success message
        showMessage(`Thanks ${name}! We'll get back to you soon.`, 'success');
        contactForm.reset();
        
        // Optional: Clear message after 3 seconds
        setTimeout(() => {
            if (formMessageDiv) formMessageDiv.innerHTML = '';
        }, 3000);
    });
}

function showMessage(msg, type) {
    if (formMessageDiv) {
        formMessageDiv.innerHTML = `<div style="padding: 10px; background: ${type === 'success' ? '#dcfce7' : '#fee2e2'}; color: ${type === 'success' ? '#166534' : '#991b1b'}; border-radius: 8px;">${msg}</div>`;
    }
}

// Blog read more alert (mini interaction)
const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Full article coming soon! Subscribe to our newsletter.');
    });
});

// Smooth scroll for CTA buttons
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        // Already has onclick to contact page, but added smooth behavior
        console.log('Redirecting to contact page');
    });
}