document.addEventListener('DOMContentLoaded', function () {
    // GSAP animation code
    gsap.fromTo(".form-container", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1, ease: "power1.out"});
});

function toggleForms(form) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (form === 'register') {
        gsap.to(loginForm, {
            x: -100, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power1.in", 
            onComplete: () => {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                gsap.fromTo(registerForm, {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 0.4, ease: "power1.out"});
            }
        });
    } else {
        gsap.to(registerForm, {
            x: 100, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power1.in", 
            onComplete: () => {
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
                gsap.fromTo(loginForm, {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.4, ease: "power1.out"});
            }
        });
    }
}

function toggleForgotPassword(show) {
    const forgotPasswordPage = document.getElementById('forgot-password-page');
    const loginForm = document.getElementById('login-form');

    if (show) {
        gsap.to(loginForm, {
            x: -100, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power1.in", 
            onComplete: () => {
                loginForm.classList.add('hidden');
                forgotPasswordPage.classList.remove('hidden');
                gsap.fromTo(forgotPasswordPage, {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 0.4, ease: "power1.out"});
            }
        });
    } else {
        gsap.to(forgotPasswordPage, {
            x: 100, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power1.in", 
            onComplete: () => {
                forgotPasswordPage.classList.add('hidden');
                loginForm.classList.remove('hidden');
                gsap.fromTo(loginForm, {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 0.4, ease: "power1.out"});
            }
        });
    }
}

function togglePasswordVisibility(id) {
    var passwordField = document.getElementById(id);
    var toggleIcon = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "😶";
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "🫣";
    }
}
