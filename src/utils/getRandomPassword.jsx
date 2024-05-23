function getRandomPassword(
    length,
    includeSymbols,
    includeLowercase,
    includeUppercase,
    includeNumbers
  ) {
    let characters = '';
    if (includeLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSymbols) {
      characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
  }
  
  export { getRandomPassword };
  