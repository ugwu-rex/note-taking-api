# Simple Note-Taking API (TypeScript & MongoDB)

A lightweight, fully typed RESTful API for managing notes and organizing them into categories, built using Node.js, Express, TypeScript, and MongoDB (Mongoose).

## Features

- **TypeScript Native**: Full type safety across controllers, services, models, requests, routes, and custom error handlers.
- **Category Organization**: Structured categories linked directly to notes with proper relational validation.
- **Generic Format Validation**: Custom request body validation middleware utilizing TypeScript Generics.
- **Typed Logging**: Custom middleware to log incoming API requests safely.
- **Service-Controller Pattern**: Clean architecture separating routing logic, request handling, and business logic.
- **MongoDB Integration**: Robust data persistence using Mongoose schemas.
- **Custom Error Handling**: Structured, typed custom error classes matched with a centralized error middleware.

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
│   ├── controllers/
│   │   └── note.controller.ts # Request/response orchestration logic
│   ├── errors/
│   │   └── CustomErrors.ts    # Custom typed error classes
│   ├── interfaces/
│   │   └── note.ts            # TypeScript interfaces for data models
│   ├── middleware/
│   │   ├── errorHandler.ts    # Centralized error handler
│   │   ├── logger.ts          # Typed API request logging middleware
│   │   └── validateNote.ts    # Generic validation middleware using TypeScript generics
│   ├── models/
│   │   ├── Category.ts        # Mongoose schema for Categories
│   │   └── Note.ts            # Mongoose schema for Notes
│   ├── routes/
│   │   └── noteRoutes.ts      # Extended REST endpoints configuration
│   ├── services/              # Business logic & database operations layer
│   └── server.ts              # Application entry point & server setup
├── .env                       # Environment variables
├── .gitignore                 # Git ignored files
├── package-lock.json
├── package.json               # Scripts and dependencies
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

---

## Getting Started

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v16 or higher)
- [MongoDB](https://mongodb.com) (Local instance or MongoDB Atlas Connection URI)

### 2. Installation
Clone the repository, switch to your new feature branch, and install the dependencies:
```bash
git checkout feature/persistence-and-categories
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
| **GET** | `/api/notes/categories/:categoryId` | Fetch all notes belonging to a specific category ID |
| **POST** | `/api/notes` | Create and save a new note with an assigned category |
| **PUT** | `/api/notes/:id` | Update an existing note by ID (Validated using generics) |
| **DELETE** | `/api/notes/:id` | Delete an existing note by ID |

### Sample JSON Payloads

#### Create a Note with Category (`POST /api/notes`)
**Request Body:**
```json
{
  "title": "Study TypeScript",
  "content": "Review custom error classes and Express middleware implementations.",
  "categoryId": "658a2b3c4d5e6f7a8b9c0d11"
}
```

**Response (201 Created):**
```json
{
  "_id": "647f1a2b3c4d5e6f7a8b9c0d",
  "title": "Study TypeScript",
  "content": "Review custom error classes and Express middleware implementations.",
  "category": {
    "_id": "658a2b3c4d5e6f7a8b9c0d11",
    "name": "Education"
  },
  "createdAt": "2026-05-31T17:00:00.000Z",
  "updatedAt": "2026-05-31T17:00:00.000Z"
}
```

#### Update a Note (`PUT /api/notes/:id`)
**Request Body:**
```json
{
  "title": "Study TypeScript & Generics",
  "content": "Deep dive into TypeScript generic middleware design patterns."
}
```

---

## 🧪 Testing with Postman

1. Open **Postman** and select your `Note-Taking API` collection.
2. Add new request items for **GET (by Category)** and **PUT (Update)** matching the endpoints table.
3. For the `PUT` request, place a valid 24-character hexadecimal MongoDB ID string inside the URL, pass the updated fields into the **JSON Body** tab, and monitor the response.
4. Open your terminal window to observe the **typed logging middleware** printing structural telemetry metadata for every request handled.
