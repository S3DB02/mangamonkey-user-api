const express = require('express');
const app = express();
const Users = require('./models/Users');
const MangaList = require('./models/MangaList');
const checkJwt = require('./auth');
const userRoutes = require('./routes/userRoutes');
const mangalistRoutes = require('./routes/mangalistRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

Users.sync();
MangaList.sync();

app.use('/user', userRoutes);
app.use('/mangalist', mangalistRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/protected', checkJwt, (req, res) => {
    res.send('You have accessed a protected route');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
