# JWT Authentication API

## Overview
This project implements JWT Authentication with Refresh Token using Node.js, Express.js, MongoDB, and bcrypt.

## Features
- User Registration
- User Login
- JWT Access Token (1 minute expiry)
- JWT Refresh Token (7 days expiry)
- Password Hashing using bcrypt
- MongoDB Integration

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Project Structure

Server/
├── src/
│   ├── Config/
│   ├── Controller/
│   ├── Models/
│   ├── Routes/
│   └── Utils/
├── server.js
├── package.json
└── .env.example

## Installation

```bash
git clone <repository-url>
cd Server
npm install
```

## Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

## Run the Project

```bash
npm start
```

## API Endpoints

### Register
POST /api/auth/register

### Login
POST /api/auth/login

### Refresh Token
POST /api/auth/refresh

## Author
Akash
