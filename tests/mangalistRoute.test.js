const express = require('express');
const supertest = require('supertest');
const MangaList = require('../models/MangaList');
const router = require('../routes/mangalistRoutes');

jest.mock('../models/MangaList'); // mock the model

const app = express();
app.use(express.json());
app.use('/', router);
const request = supertest(app);

describe("Post MangaList", () => {
    it('should return a status 201 and create a new manga list entry', async () => {
        const mockMangaListEntry = {
            user_id: "user1",
            manga_id: "manga1",
            status: "reading",
            current_chapter: "1"
        };

        const reqBody = {
            user_id: "user1",
            manga_id: "manga1",
            status: "reading",
            current_chapter: "1"
        };

        MangaList.findOne.mockResolvedValue(null); // assume the manga is not in the list
        MangaList.create.mockResolvedValue(mockMangaListEntry); // mock the create function

        const response = await request.post('/add').send(reqBody);

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(mockMangaListEntry);
    });

    afterEach(() => {
        // Cleaning up the mess left behind the previous test
        MangaList.findOne.mockClear();
        MangaList.create.mockClear();
    });
});
