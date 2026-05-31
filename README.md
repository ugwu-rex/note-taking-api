# Simple Note-Taking API (TypeScript & MongoDB)

A lightweight, fully typed RESTful API for managing notes, built using Node.js, Express, TypeScript, and MongoDB (Mongoose).

## Features

- **TypeScript Native**: Full type safety across models, requests, routes, and custom error handlers.
- **MongoDB Integration**: Robust data persistence using Mongoose schemas.
- **Custom Error Handling**: Structured, typed custom error classes matched with a centralized error middleware.
- **RESTful Architecture**: Clean separation of routes, models, and controllers.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)

---

## Project Structure

```text
├── node_modules/
├── src/
│   ├── errors/
│   │   └── CustomErrors.ts  # Custom typed error classes
│   ├── interfaces/
│   │   └── note.ts          # TypeScript interfaces for data models
│   ├── middleware/
│   │   └── errorHandler.ts  # Express error handling middleware
│   ├── models/
│   │   └── Note.ts          # Mongoose schema definitions
│   ├── routes/
│   │   └── noteRoutes.ts    # REST endpoints configuration
│   └── server.ts            # Application entry point & server setup
├── .env                     # Environment variables
├── .gitignore               # Git ignored files
├── package-lock.json
├── package.json             # Scripts and dependencies
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

---

## Getting Started

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v16 or higher)
- [MongoDB](https://mongodb.com) (Local instance or MongoDB Atlas Connection URI)

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Setup
Configure your environment variables inside the `.env` file located in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notetaking-db
```

### 4. Running the API
Start the development server with live reload:
```bash
npm run dev
```
The server will boot up and listen for requests at `http://localhost:5000`.

---

## API Endpoints


| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/notes` | Fetch all notes from the database |
| **GET** | `/api/notes/:id` | Fetch a single note by its unique ID |
| **POST** | `/api/notes` | Create and save a new note |
| **DELETE** | `/api/notes/:id` | Delete an existing note by ID |

### Sample JSON Payloads

#### Create a Note (`POST /api/notes`)
**Request Body:**
```json
{
  "title": "Study TypeScript",
  "content": "Review custom error classes and Express middleware implementations."
}
```

**Response (201 Created):**
```json
{
  "_id": "647f1a2b3c4d5e6f7a8b9c0d",
  "title": "Study TypeScript",
  "content": "Review custom error classes and Express middleware implementations.",
  "createdAt": "2026-05-31T17:00:00.000Z",
  "updatedAt": "2026-05-31T17:00:00.000Z"
}
```

---

## Testing with Postman

1. Open the **Postman** desktop application or web dashboard.
2. Click **New** -> **Collection** and name it `Note-Taking API`.
3. Add 4 separate requests matching the methods and routes in the endpoints table above.
4. For the `POST` request, go to the **Body** tab, select **raw**, choose **JSON** format, and paste the request body sample.
5. Send requests to `http://localhost:5000/api/notes`.
6. Provide a valid 24-character hex MongoDB ID string inside the URL parameter path to test the `GET /api/notes/:id` and `DELETE /api/notes/:id` targets.
