const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.post('/create', async (req, res) => {
    try {
        const { sub, name, picture } = req.body;

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ where: { id: sub } });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = await User.create({
            id: sub,
            username: name,
            image_link: picture,
            theme: 'light',
        });

        console.log(newUser); // Log the new user to the console
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred on the server.' });
    }
});

module.exports = router;
