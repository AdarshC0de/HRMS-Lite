# HRMS Lite

## Overview
A lightweight HR management system for managing employees and tracking attendance.

## Tech Stack
Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express
- MongoDB
- Mongoose

Deployment:
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Features
- Add, view, and delete employees
- Mark attendance (present/absent)
- View attendance per employee

## Local Setup

### Backend
cd backend
npm install
create .env with MONGO_URL
npm start

### Frontend
cd frontend
npm install
npm run dev

## Assumptions
- Single admin user
- No authentication required
