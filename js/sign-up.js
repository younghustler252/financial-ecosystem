const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.classList.remove('success');
    return;
  }

  const userData = {
    name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    password: password
  };

  localStorage.setItem('financial_user', JSON.stringify(userData));
  message.textContent = 'Signup successful! You can now log in.';
  message.classList.add('success');
  form.reset();
});