const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'erikhadri97@gmail.com', // Your Gmail address
        pass: 'ymar vmqv sgvy vrzq' // Your Gmail app password
    }
});

// Set up email details
const mailOptions = {
    from: 'erikhadri97@gmail.com', // Same as the authenticated Gmail address
    to: 'erik_hadrii@outlook.com', // The recipient's email address
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email to check if Nodemailer is working properly.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error.message); // Log the specific error message
    } else {
        console.log('Email sent:', info.response); // Log the response
    }
});
