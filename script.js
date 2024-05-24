let passwordLength = 12;
let includeSymbols = true;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let generatedPassword = '';
let passwordLevel = 0;

function updatePasswordLength() {
  passwordLength = document.getElementById('password-length').value;
  document.getElementById('password-length-value').textContent = passwordLength;
  generatePassword();
}

function updatePasswordOptions() {
  includeSymbols = document.getElementById('include-symbols').checked;
  includeLowercase = document.getElementById('include-lowercase').checked;
  includeUppercase = document.getElementById('include-uppercase').checked;
  includeNumbers = document.getElementById('include-numbers').checked;
  generatePassword();
}

function generatePassword() {
  let level = 0;
  let characters = '';
  if (includeLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
    level++;
  }
  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    level++;
  }
  if (includeNumbers) {
    characters += '0123456789';
    level++;
  }
  if (includeSymbols) {
    characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    level++;
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    if (characters.length > 0) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  }
  generatedPassword = password;
  passwordLevel = level;
  updatePasswordStrength();
  document.getElementById('generated-password').textContent = generatedPassword;
}

function updatePasswordStrength() {
  const passwordStrengthText = document.getElementById('password-strength');
  const passwordStrengthLevel1 = document.getElementById('password-strength-level-1');
  const passwordStrengthLevel2 = document.getElementById('password-strength-level-2');
  const passwordStrengthLevel3 = document.getElementById('password-strength-level-3');
  const passwordStrengthLevel4 = document.getElementById('password-strength-level-4');

  passwordStrengthLevel1.classList.remove('red', 'orange', 'yellow', 'green');
  passwordStrengthLevel2.classList.remove('orange', 'yellow', 'green');
  passwordStrengthLevel3.classList.remove('yellow', 'green');
  passwordStrengthLevel4.classList.remove('green');

  switch (passwordLevel) {
    case 1:
      passwordStrengthText.textContent = 'TOO WEAK!';
      passwordStrengthLevel1.classList.add('red');
      break;
    case 2:
      passwordStrengthText.textContent = 'WEAK';
      passwordStrengthLevel1.classList.add('orange');
      passwordStrengthLevel2.classList.add('orange');
      break;
    case 3:
      passwordStrengthText.textContent = 'MEDIUM';
      passwordStrengthLevel1.classList.add('yellow');
      passwordStrengthLevel2.classList.add('yellow');
      passwordStrengthLevel3.classList.add('yellow');
      break;
    case 4:
      passwordStrengthText.textContent = 'STRONG';
      passwordStrengthLevel1.classList.add('green');
      passwordStrengthLevel2.classList.add('green');
      passwordStrengthLevel3.classList.add('green');
      passwordStrengthLevel4.classList.add('green');
      break;
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(generatedPassword);
  showToast('Пароль скопирован в буфер обмена!');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
