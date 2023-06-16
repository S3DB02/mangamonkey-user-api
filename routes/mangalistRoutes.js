const express = require('express');
const router = express.Router();
const MangaList = require('../models/MangaList'); // import your MangaList model

router.post('/add', async (req, res) => {
    const { user_id, manga_id, status, current_chapter } = req.body;

    // Check if the manga already exists in the user's list
    const existingEntry = await MangaList.findOne({ where: { user_id: user_id, manga_id: manga_id } });
    if (existingEntry) {
        return res.status(409).json({ message: 'Manga is already in your list' });
    }

    // Create a new manga list entry
    const newEntry = await MangaList.create({
        user_id: user_id,
        manga_id: manga_id,
        status: status,
        current_chapter: current_chapter,
    });

    res.status(201).json(newEntry);
});

module.exports = router;
