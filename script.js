document.getElementById('generateBtn').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;
  
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    var password = '';
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    document.getElementById('password').value = password;
  });
  