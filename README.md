# MangaMonkey User API
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

<!-- Insert SonarCloud Badges here -->

You can set up this app by following these steps:

## Prerequisites

- Ensure that you have Node.js and Docker installed in your system## User API README (Continued)


## Running Manually

You can also run this app manually.

### Set up dependencies

- Open your terminal.
- Navigate to your project directory using the `cd` command.
- Install the project's dependencies by running:
    ```
    npm install
    ```

### Run your project

- Start the project by running
    ```
    npm start
    ```

## Testing

Tests for this app are written using Jest. To run tests manually you can use `npm run test`.

## Developing

When developing this project, you should create a MySQL database and add the connection details in the environment file (.env). Replace the Docker-specific values with your local MySQL connection details. Here is an example of how the `.env` file should look:

    AUTH0_DOMAIN=your_auth0_domain
    AUTH0_CLIENT_ID=your_auth0_client_id
    AUTH0_CLIENT_SECRET=your_auth0_client_secret
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_HOST=your_database_host
    DB_DIALECT=your_database_dialect
    DB_PORT=your_database_port

## Useful Documentation

[Node.js](https://nodejs.org/en/doc)
[Express](https://expressjs.com/)
[MySQL](https://dev.mysql.com/doc/)
[Docker](https://docs.docker.com/)
[Jest](https://jestjs.io/)
