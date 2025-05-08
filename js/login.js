const form = document.getElementById('loginForm');
const message = document.getElementById('message');
const rememberMe = document.getElementById('rememberMe');
const emailInput = document.getElementById('email');

// If saved before, auto-fill the email
window.addEventListener('load', () => {
  const rememberedEmail = localStorage.getItem('remembered_email');
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberMe.checked = true;
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = document.getElementById('password').value;
  const storedUser = JSON.parse(localStorage.getItem('financial_user'));

  if (!storedUser || storedUser.email !== email) {
    message.textContent = 'No account found with this email.';
    message.classList.remove('success');
    return;
  }

  if (storedUser.password !== password) {
    message.textContent = 'Incorrect password.';
    message.classList.remove('success');
    return;
  }

  // Save email if 'Remember Me' is checked
  if (rememberMe.checked) {
    localStorage.setItem('remembered_email', email);
  } else {
    localStorage.removeItem('remembered_email');
  }

  message.textContent = 'Login successful! Redirecting...';
  message.classList.add('success');

  // Simulate redirect
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
});