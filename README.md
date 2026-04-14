# Student Skill Exchange Platform (MERN Stack)

## Overview

The **Student Skill Exchange Platform** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform enables students to connect with peers and exchange skills in a collaborative learning environment.

Users can create profiles, list skills they can teach, mention skills they want to learn, search for other learners, send skill exchange requests, and track learning connections using an interactive dashboard.

The application focuses on peer-to-peer knowledge sharing and includes modern UI features such as skill match scoring, profile completion tracking, analytics dashboard, dark mode, and responsive design.

---

## Key Features

### User Authentication

The application provides secure user authentication using JWT tokens. Users can create an account and log in securely. Passwords are encrypted using bcrypt to ensure safety of user credentials.

### Profile Management

Each user has a personal profile that displays their information and skills.

Users can:

* Add or edit bio
* Add skills they can teach
* Add skills they want to learn
* Remove skills individually
* Upload profile image using image URL
* View profile completion progress
* Receive suggestions for incomplete profile fields

Profile completion is displayed as a progress bar, encouraging users to provide complete information for better matches.

### Skill Search System

Users can search for other students based on skills. The search functionality helps users find people offering specific skills such as React, Python, JavaScript, etc.

Search results display:

* user name
* email
* skills offered
* avatar initials
* skill badges

Users can send skill exchange requests directly from the search results page.

### Skill Match Score

The platform calculates a skill match percentage between users based on skills wanted and skills offered.

This helps users quickly identify the most relevant learning partners.

Example:
Match Score: 75%

Higher score indicates better compatibility.

### Smart Skill Match Suggestions

The dashboard automatically suggests users who offer skills that match the logged-in user's learning interests.

This feature improves user experience by reducing manual searching effort.

### Request Management System

Users can send skill exchange requests to other users. Each request includes skill name and message.

Request receiver can:

* accept request
* reject request

Request status is stored and displayed as:

* pending
* accepted
* rejected

Users can also view sent requests.

Duplicate requests are prevented.

### Dashboard Analytics

Dashboard displays useful statistics such as:

* total requests
* accepted requests
* pending requests
* rejected requests

A pie chart visualization helps users quickly understand request distribution.

### Request Filtering

Users can filter request history by status:

* all requests
* accepted requests
* pending requests
* rejected requests

This makes request management easier.

### Timestamp Tracking

Each request shows the date on which it was created. This helps users track their activity history.

### Notification Badge

The application shows a notification badge indicating number of pending requests.

This ensures users never miss incoming learning requests.

### Modern User Interface

The application includes modern UI elements such as:

Collapsible Sidebar
Sidebar can be expanded or collapsed for better space usage.

Dark Mode
Users can switch between light and dark theme. Theme preference is saved automatically.

Avatar Initials
User avatar is automatically generated using initials if profile photo is not available.

Skill Badges
Skills are displayed in badge format for better readability.

Hover Animations
Interactive hover effects are applied on buttons, cards, and navigation items.

Loading Shimmer Effect
Loading placeholders appear while data is being fetched, improving perceived speed.

Responsive Layout
Application layout adapts to different screen sizes.

Footer Component
Reusable footer component displayed across pages.

---

## Technology Stack

Frontend:
React.js
CSS
React Hooks
React Router
Recharts (charts)

Backend:
Node.js
Express.js

Database:
MongoDB Atlas

Authentication:
JWT
bcrypt

Tools Used:
Postman
Git
GitHub
VS Code
Nodemon

---

## Project Structure

student-skill-exchange

backend
controllers
models
routes
server.js

frontend
src
components
pages
api
styles.css

README.md
.gitignore

---

## Installation Steps

Clone the repository:

git clone https://github.com/kshreya162/student-skill-exchange-platform.git

Backend setup:

cd backend
npm install
npm start

Frontend setup:

cd frontend
npm install
npm start

Backend runs on:
http://localhost:5000

Frontend runs on:
http://localhost:3000

---

## Environment Variables

Create .env file inside backend folder and add:

MONGO_URI = your_mongodb_connection_string
PORT = 5000
JWT_SECRET = your_secret_key

---

## Working of the Application

1. User signs up and logs in.
2. User completes profile by adding skills.
3. Platform suggests matching users.
4. User searches for learners by skill.
5. User sends skill exchange request.
6. Receiver accepts or rejects request.
7. Dashboard shows request analytics.
8. Users track skill exchange connections.

---

## Future Improvements

Real-time chat between users
Email notifications
Skill level indicators (Beginner/Intermediate/Advanced)
Calendar scheduling feature
Video call integration
Mobile responsive sidebar improvements
Admin dashboard
Public profile sharing

---

## Learning Outcomes

This project demonstrates:

Full-stack MERN development
REST API design
MongoDB schema modeling
Authentication implementation
React state management
Component-based architecture
Data visualization integration
Git version control workflow

---

## Author

Shreya
Engineering Student
