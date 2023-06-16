const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const app = express();

app.use(express.json());
app.use('/user', userRoutes);

// Mock the User model
jest.mock('../models/Users', () => {
    return {
        findOne: jest.fn(),
        create: jest.fn(),
    };
});
const User = require('../models/Users');

describe('POST /user/create', () => {
    it('should create a new user and return a 201 status code', async () => {
        const newUserData = {
            sub: 'sub1',
            name: 'name1',
            picture: 'picture1',
        };
        User.findOne.mockResolvedValue(null);
        User.create.mockResolvedValue(newUserData);

        const response = await request(app)
            .post('/user/create')
            .send(newUserData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(newUserData);
        expect(User.create).toHaveBeenCalledWith({
            id: newUserData.sub,
            username: newUserData.name,
            image_link: newUserData.picture,
            theme: 'light',
        });
    });

    it('should return a 409 status code if the user already exists', async () => {
        const existingUserData = {
            sub: 'sub1',
            name: 'name1',
            picture: 'picture1',
        };
        User.findOne.mockResolvedValue(existingUserData);

        const response = await request(app)
            .post('/user/create')
            .send(existingUserData);

        expect(response.statusCode).toBe(409);
        expect(response.body).toEqual({ message: 'User already exists' });
    });

    it('should return a 500 status code if an error occurs on the server', async () => {
        const newUserData = {
            sub: 'sub1',
            name: 'name1',
            picture: 'picture1',
        };
        User.findOne.mockRejectedValue(new Error('Fake error'));

        const response = await request(app)
            .post('/user/create')
            .send(newUserData);

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ error: 'An error occurred on the server.' });
    });
});
