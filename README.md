# Student Skill Exchange Platform (MERN Stack)

The Student Skill Exchange Platform is a full-stack web application that enables students to connect with peers to exchange skills and learn collaboratively. Users can create profiles, list skills they can teach, specify skills they want to learn, search for other users based on skills, and send learning requests.

The platform includes an interactive dashboard with analytics, intelligent skill match suggestions, request filtering, and modern UI features such as dark mode and collapsible sidebar navigation.

---

## Features

### Authentication
- User signup and login
- Secure password storage using bcrypt
- JWT-based authentication

### Profile Management
- Add skills offered
- Add skills wanted
- Update skills anytime
- User bio display

### Skill Search
- Search users by skills
- View users offering specific skills
- Send learning requests directly

### Skill Match Suggestions
- Automatically suggests users based on skills wanted
- Helps users find relevant learning partners

### Request Management
- Send skill exchange requests
- Accept or reject requests
- View sent requests
- Prevent duplicate requests

### Dashboard Analytics
- Total requests count
- Accepted requests count
- Pending requests count
- Rejected requests count
- Pie chart visualization of request status

### Request Filtering
- Filter requests by status:
  - All
  - Accepted
  - Pending
  - Rejected

### Notification Badge
- Displays count of pending requests
- Updates automatically

### UI Features
- Collapsible sidebar navigation
- Dark mode toggle
- Avatar initials for users
- Skill badges UI
- Hover animations
- Loading shimmer effect
- Responsive layout
- Footer section

### Timestamp Tracking
- Shows date when request was created

---

## Tech Stack

### Frontend
- React.js
- CSS
- React Hooks

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Visualization
- Recharts

### Tools Used
- Postman
- Git
- GitHub
- VS Code

---

## Project Structure
student-skill-exchange
│
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── config
│ └── server.js
│
├── frontend
│ ├── components
│ ├── pages
│ ├── api
│ ├── public
│ └── styles.css
│
├── README.md
└── .gitignore


---

## Installation

### Clone repository
git clone https://github.com/kshreya162/student-skill-exchange-platform.git


### Backend setup
cd backend
npm install
npm start


### Frontend setup
cd frontend
npm install
npm start


---

## How It Works

1. Users create an account and log in.
2. Users add skills they can teach and skills they want to learn.
3. Users search for other users based on skills.
4. Users send skill exchange requests.
5. Request receiver can accept or reject the request.
6. Dashboard displays request analytics and match suggestions.

---

## Future Improvements

- Chat feature between users
- Email notifications
- Profile picture upload
- Mobile responsive sidebar
- Deployment on cloud platforms

---

## Author

Shreya

---

## Project Description

This project demonstrates full-stack development using the MERN stack, including REST API design, MongoDB schema modeling, authentication logic, state management, and modern UI/UX implementation.