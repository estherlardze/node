
#MINI MERN Stack Workout App 

## Features

- **Create**: Add new workouts with title, load and reps.
- **Read**: View all workouts stored in the database.
- **Update**: Modify existing workouts to reflect changes in exercise details.
- **Delete**: Remove workouts that are no longer relevant or needed.

## Technologies Used

- **MongoDB**: NoSQL database for storing workout data.
- **Express.js**: Backend framework for building RESTful APIs.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for server-side logic.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/estherlardze/node
   ```


2. Install frontend dependencies:
    ``` cd client```
       ``` npm install```


2. Install backend dependencies:
    ``` cd backend```
       ```npm install```   

3. Configure environment variables:
   - Create a `.env` file in the `backend` and set your MongoDB URI and your PORT NUMBER.

4. Start the application:
   ```bash
   # Start the server (from the backend directory)
   npm run dev

   # Start the client (from the frontend directory)
   npm run dev
   ```

5. Open your browser and navigate to ` http://localhost:5173/` to use the application.

## API Endpoints

- **GET /api/workouts**: Get all workouts.
- **GET /api/workouts/:id**: Get a specific workout by ID.
- **POST /api/workouts**: Create a new workout.
- **PUT /api/workouts/:id**: Update an existing workout by ID.
- **DELETE /api/workouts/:id**: Delete a workout by ID.
