// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";
    
    // TODO: Create a variable for the character set based on selected options
    let characters = '';
    if (options.includeUppercase) characters += uppercase;
    if (options.includeLowercase) characters += lowercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSpecialChars) characters += specialChars;


// TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
};
// TODO: Add event listener to the button to call generatePassword and display the output

// BONUS: Implement the copy to clipboard functionality