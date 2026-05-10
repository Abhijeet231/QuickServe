# ServiceHub – Local Service Booking Platform

A full-stack local service booking platform that connects customers with local service professionals and manages the complete booking lifecycle.

The platform allows customers to browse services, book professionals, track booking status, and manage appointments. Service providers can manage bookings, update job progress, and maintain their professional profiles.

---

# Features

## Customer Features
- Browse services by category
- Filter services by city or area
- Create booking requests
- Upload optional images while booking
- View pricing before confirmation
- Track booking status:
  - Requested
  - Confirmed
  - In-progress
  - Completed
  - Cancelled
- Reschedule bookings
- Cancel bookings

## Service Provider Features
- Create and manage professional profile
- Toggle availability status
- Accept or reject bookings
- Update job status
- Add work notes
- Upload before/after work images

## Admin Features
- Approve service providers
- Manage service categories
- Moderate platform activities

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary

## Tools & Deployment
- Git & GitHub
- Render
- Vercel

---

# Project Structure

```bash
project-root/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── backend/
│   ├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── ...
│
└── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

---

# Backend Setup

## Navigate to Backend Folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

Create a `.env` file inside the backend folder and add the following:

```env
MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
PORT=5000
ACCESS_TOKEN_EXPIRY=7d
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CORS_ORIGIN=http://localhost:5173
```

## Run Backend Server

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to Frontend Folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

Create a `.env` file inside the frontend folder and add:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# Booking Workflow

```text
Requested
   ↓
Confirmed
   ↓
In-progress
   ↓
Completed
```

Alternative flow:

```text
Requested → Cancelled
```

---

# Environment Variables

## Backend Environment Variables

| Variable | Description |
|---|---|
| MONGODB_URI | MongoDB database connection string |
| ACCESS_TOKEN_SECRET | JWT access token secret |
| ACCESS_TOKEN_EXPIRY | Token expiry duration |
| PORT | Backend server port |
| NODE_ENV | Environment mode |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name |
| CLOUDINARY_API_KEY | Cloudinary API key |
| CLOUDINARY_API_SECRET | Cloudinary API secret |
| CORS_ORIGIN | Frontend URL |

## Frontend Environment Variables

| Variable | Description |
|---|---|
| VITE_API_BASE_URL | Backend API base URL |

---

# API Features

- JWT Authentication
- Protected Routes
- File Upload Support
- Booking State Management
- Role-based Access Control
- Cloudinary Image Upload

---

# Future Improvements

- Ratings & Reviews System
- Real-time Notifications
- Online Payment Integration
- Live Chat Support
- Email Notifications

---

# Challenges Faced

- Managing booking workflow transitions
- Handling secure authentication
- Managing image uploads
- CORS configuration during deployment
- Role-based authorization

---

# Deployment

## Frontend
Deploy frontend on platforms like:
- Vercel
- Netlify

## Backend
Deploy backend on:
- Render
- Railway

---

# Author

Abhijeet Ghosh

Full Stack Developer
```