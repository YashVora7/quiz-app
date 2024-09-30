# Quiz App - Backend

This is the backend for the Quiz App. It provides API endpoints to fetch all quizzes, fetch a specific quiz by its ID, and submit answers for scoring. The app uses **Node.js**, **Express.js**, and **MongoDB** (with **Mongoose** for schema definition).

## Features:
- Fetch all available quizzes or get a quiz by its ID.
- Handle quiz answer submissions.
- Calculate the total score based on correct answers.

## Technologies Used:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework to handle routes and middleware.
- **MongoDB**: NoSQL database for storing quiz data.
- **Mongoose**: ORM for MongoDB, used to define schemas and interact with the database.
- **dotenv**: Manages environment variables.
- **JWT**: For creating and verifying tokens (JSON Web Tokens).

## API Endpoints:

### User Routes:

| Method | Endpoint                         | Description                        |
|--------|----------------------------------|------------------------------------|
| **POST**    | `/user/login`                    | Login User                      |
| **POST**     | `/user/signup`                    | Register User                  |

### Quiz Routes:

| Method | Endpoint                         | Description                        |
|--------|----------------------------------|------------------------------------|
| **GET**    | `/quiz/quizzes`                   | Fetch all available quizzes         |
| **GET**    | `/quiz/quizzes/:id`               | Fetch a specific quiz by its ID     |
| **POST**   | `/quiz/quizzes/submit`            | Submit quiz answers and calculate the score |

*Note: If you getting error regarding routes so you can check api routes from routes folder

## Requirements:
To run this project locally, ensure you have the following installed:

- **Node.js** (v12+): [Install Node.js](https://nodejs.org/)
- **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation:

1. **Clone the repository**: Download the project files to your local machine by cloning the repository.

2. **Install dependencies**: After navigating to the project directory, install all required Node.js dependencies by running the `npm install` command. This will download and set up all necessary libraries for the app.

3. **Ensure MongoDB is running**: If you're using a local MongoDB instance, make sure MongoDB is running on your system. Alternatively, if you're using a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), ensure your connection string in `.env` is properly set.

4. **Run the server**: Start the application server by running the appropriate command for your setup:
- If using Node.js, simply run: `node app.js`.
- If using **nodemon** (a tool for automatically restarting the server), run: `nodemon app.js`.

Once the server is up and running, your API should be accessible for use.


