# ChaTY

ChaTY is a real-time chat application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Socket.IO** for seamless bidirectional communication.

## Features

- Real-time messaging powered by Socket.IO.
- User authentication with JWT.
- Group chat functionality.
- Online/offline user status indicators.
- Responsive and user-friendly interface.

## Quick Start

### Clone the Project

```bash
git clone https://github.com/BryanMico/ChaTY.git
cd ChaTY
```

### Install Dependencies

#### For the Backend

```bash
cd backend
npm install
```

#### For the Frontend

```bash
cd ../frontend
npm install
```

### Add Environment Variables

Create a `.env` file in the `backend` folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SOCKET_PORT=your_socket_io_port
```

### Run the Application

#### Start the Backend Server

```bash
cd backend
npm run dev
```

#### Start the Frontend

```bash
cd ../frontend
npm start
```

Open [http://localhost:3000](http://localhost:3000) for the frontend and ensure the backend is running on [http://localhost:5000](http://localhost:5000).

## Folder Structure

```plaintext
./
├── backend/         # Backend server with APIs and Socket.IO setup
│   ├── controllers/ # Logic for handling API requests
│   ├── db/          # Database connection and utilities
│   ├── middleware/  # Custom middlewares (e.g., auth handling)
│   ├── models/      # Mongoose database schemas
│   ├── routes/      # API endpoints
│   ├── socket/      # Socket.IO event handling
│   ├── utils/       # Utility functions
│   └── server.js    # Entry point for the backend server
├── frontend/        # React frontend
│   ├── public/      # Public assets
│   ├── src/         # Source code
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Application pages
│   │   └── App.js      # Main React component
├── .gitignore       # Git ignore file
├── LICENSE          # Project license
├── README.md        # Project documentation
├── package.json     # NPM configuration file
└── tailwind.config.js # TailwindCSS configuration
```

## License

This project is licensed under the MIT License:

```plaintext
MIT License

Copyright (c) 2025 Bryan Mico

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact

- GitHub: [BryanMico](https://github.com/BryanMico)

