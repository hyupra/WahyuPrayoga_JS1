let age = 25;
let country = 'USA';

if (age >= 18) {
    console.log('You are eligible to vote.');

    if (country === 'USA') {
        console.log('You are eligible to vote in the USA.');
    } else {
        console.log('You are eligible to vote in your country.');
    }
} else {
    console.log('You are not eligible to vote.');
}