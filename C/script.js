const VALID_CREDENTIALS = [
    { email: 'sylviaH@solum.com', password: '@Adventurer25' },
    { email: 'vish@solum.com', password: '$GotJobAtSolum25' }
];

const loginCard = document.getElementById('loginCard');
const welcomeCard = document.getElementById('welcomeCard');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginButton = document.getElementById('loginButton');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthLabel = document.getElementById('passwordStrengthLabel');
const criteriaItems = document.querySelectorAll('.password-criteria li');
const toast = document.getElementById('toast');
const confettiContainer = document.getElementById('confettiContainer');
const welcomeTitle = document.getElementById('welcomeTitle');
const welcomeEmailDisplay = document.getElementById('welcomeEmailDisplay');
const togglePasswordBtn = document.getElementById('togglePassword');

const strengthColors = [
    '#ef4444', '#f97316', '#facc15', '#4ade80', '#22d3ee'
];

function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

function clearError(element) {
    element.textContent = '';
    element.style.display = 'none';
}

function updatePasswordFeedback(password) {
    const checks = {
        length: password.length >= 8 && password.length <= 16,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        symbol: /[!@#$%^&*()_+\-=[\]{};':"\|,.<>\/?]/.test(password)
    };

    let score = 0;
    criteriaItems.forEach(item => {
        const key = item.getAttribute('data-criterion');
        if (checks[key]) {
            item.classList.add('met');
            score += 1;
        } else {
            item.classList.remove('met');
        }
    });

    const strengthPercent = (score / 5) * 100;
    passwordStrengthBar.style.width = strengthPercent + '%';
    passwordStrengthBar.style.background = `linear-gradient(90deg, ${strengthColors[Math.max(score - 1, 0)]}, ${strengthColors[Math.min(score, strengthColors.length - 1)]})`;

    const labels = ['Start typing', 'Very weak', 'Weak', 'Okay', 'Strong', 'Legendary'];
    passwordStrengthLabel.textContent = `Strength: ${labels[score]}`;
}

function validateEmail(emailValue) {
    if (!emailValue || emailValue.trim() === '') {
        return 'Email is required';
    }

    const validEmails = VALID_CREDENTIALS.map(cred => cred.email);
    if (!validEmails.includes(emailValue)) {
        return 'Email does not exist';
    }

    return '';
}

function validatePassword(passwordValue, emailValue) {
    if (!passwordValue || passwordValue.trim() === '') {
        return 'Password is required';
    }

    if (passwordValue.length < 8 || passwordValue.length > 16) {
        return 'Password must be between 8 and 16 characters';
    }

    if (!/[A-Z]/.test(passwordValue)) {
        return 'Password must contain at least one uppercase letter';
    }

    if (!/[a-z]/.test(passwordValue)) {
        return 'Password must contain at least one lowercase letter';
    }

    if (!/[0-9]/.test(passwordValue)) {
        return 'Password must contain at least one number';
    }

    if (!/[!@#$%^&*()_+\-=[\]{};':"\|,.<>\/?]/.test(passwordValue)) {
        return 'Password must contain at least one symbol';
    }

    const credential = VALID_CREDENTIALS.find(cred => cred.email === emailValue);
    if (credential && credential.password !== passwordValue) {
        return 'Incorrect password';
    }

    return '';
}

function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast toast-${type} visible`;
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 2600);
}

function launchConfetti() {
    for (let i = 0; i < 24; i++) {
        const confetti = document.createElement('span');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = strengthColors[i % strengthColors.length];
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1800);
    }
}

function setLoading(isLoading) {
    if (isLoading) {
        loginButton.textContent = 'Authenticating…';
        loginButton.disabled = true;
    } else {
        loginButton.textContent = 'Enter Portal';
        loginButton.disabled = false;
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    clearError(emailError);
    clearError(passwordError);

    const emailErr = validateEmail(email);
    if (emailErr) {
        showError(emailError, emailErr);
        return;
    }

    const passwordErr = validatePassword(password, email);
    if (passwordErr) {
        showError(passwordError, passwordErr);
        return;
    }

    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        showWelcomeScreen(email);
        showToast('Portal unlocked!', 'success');
        launchConfetti();
    }, 750);
});

function showWelcomeScreen(email) {
    loginCard.style.display = 'none';
    welcomeCard.classList.remove('hidden');
    welcomeCard.classList.add('active');
    welcomeTitle.textContent = 'Welcome, adventurer!';
    welcomeEmailDisplay.textContent = email;
}

function showLoginScreen() {
    welcomeCard.classList.add('hidden');
    welcomeCard.classList.remove('active');
    loginCard.style.display = '';
    loginForm.reset();
    updatePasswordFeedback('');
    passwordStrengthLabel.textContent = 'Strength: Start typing';
    passwordStrengthBar.style.width = '0%';
    clearError(emailError);
    clearError(passwordError);
}

document.getElementById('logoutButton').addEventListener('click', () => {
    showLoginScreen();
    showToast('Logged out successfully', 'info');
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Password reset spell coming soon ✨', 'info');
});

emailInput.addEventListener('input', () => {
    clearError(emailError);
});

passwordInput.addEventListener('input', (e) => {
    updatePasswordFeedback(e.target.value);
    clearError(passwordError);
});

togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = 'Show';
    }
});

function updateTorchPosition(e) {
    document.body.style.setProperty('--torch-x', `${e.clientX}px`);
    document.body.style.setProperty('--torch-y', `${e.clientY}px`);
}

loginButton.addEventListener('mousemove', (e) => {
    const rect = loginButton.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    loginButton.style.setProperty('--btn-x', `${x}%`);
    loginButton.style.setProperty('--btn-y', `${y}%`);
});

loginButton.addEventListener('mouseenter', () => {
    document.body.classList.add('torch-active');
    document.addEventListener('mousemove', updateTorchPosition);
});

loginButton.addEventListener('mouseleave', () => {
    loginButton.style.removeProperty('--btn-x');
    loginButton.style.removeProperty('--btn-y');
    document.body.classList.remove('torch-active');
    document.body.style.removeProperty('--torch-x');
    document.body.style.removeProperty('--torch-y');
    document.removeEventListener('mousemove', updateTorchPosition);
});

updatePasswordFeedback('');
