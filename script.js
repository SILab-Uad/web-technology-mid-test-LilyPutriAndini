function generatePassword(length, options) {
    let characters = '';
    if (options.includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeNumbers) characters += '0123456789';
    if (options.includeSpecialChars) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

module.exports = { generatePassword };
