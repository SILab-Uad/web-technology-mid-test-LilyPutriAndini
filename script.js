// TODO: Implement the password generation logic based on user input
function generatePassword(length, options) {
    
    // TODO: Create a variable for the character set based on selected options
    let characters = '';
    if (options.includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeNumbers) characters += '0123456789';
    if (options.includeSpecialChars) characters += '!@#$%^&*()';

// TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
// TODO: Add event listener to the button to call generatePassword and display the output
    return password;
}
// BONUS: Implement the copy to clipboard functionality