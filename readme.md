
# Program Manager

A program ticket manager webpage.

## Table of Contents

- [Installation](#installation)
- [Starting the Application](#starting-the-application)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)


---

### Installation

To set up this project locally, clone the repository and follow these steps to install dependencies for both client and server.

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammedfaiz/Program-Manager.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Program-Manager
   ```

### Starting the Application

1. **Start the Client**:
   - Navigate to the client folder:
     ```bash
     cd client
     ```
   - Install client dependencies:
     ```bash
     npm install
     ```
   - Run the client:
     ```bash
     npm run dev
     ```

2. **Start the Server**:
   - Open a new terminal window or tab.
   - Navigate to the server folder:
     ```bash
     cd server
     ```
   - Install server dependencies:
     ```bash
     npm install
     ```
   - Run the server:
     ```bash
     npm start
     ```

The application should now be running locally, with the client accessible at `http://localhost:5173` and the server accessible at `http://localhost:8000`.

### Environment Variables

Create a `.env` file in the `server` folder and add the following environment variables:

```plaintext
PORT=8000
MONGO=mongodb://127.0.0.1:27017/Programs
```

- **PORT**: The port number on which the server will run.
- **MONGO**: The connection string for the MongoDB database.

### Technologies Used

- **Frontend**: React, Tailwind CSS, etc.
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

