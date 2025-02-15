const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS (Allow requests from your frontend)
app.use(cors());
app.use(express.json()); // Use express built-in JSON parser

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// POST route for sending emails
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'erikhadri97@gmail.com', // Replace with your email
                pass: 'aiib ozjw liyh hnsl' // Replace with your Gmail App Password
            }
        });

        // Email content
        const mailOptions = {
            from: email, // User's email
            to: 'erik_hadrii@outlook.com', // Recipient's email
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).json({ success: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
