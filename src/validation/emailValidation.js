// Example regex validation for email
const emailValidation = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};

// Usage
const email = 'test@example.com';
console.log(emailValidation(email)); // true