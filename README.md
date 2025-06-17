
# Project: Progresso

A task management web application


## Project Purpose:

The goal of this project is to build a full-stack Kanban board application using the MERN stack (MongoDB, Express.js, React, Node.js) as part of an internship task. The application enables users to register, log in, and efficiently manage their tasks using a drag-and-drop Kanban interface, allowing smooth transitions between To Do, In Progress, and Completed stages. This project demonstrates the ability to develop a secure, functional, and user-friendly web application with full-stack capabilities.

## Key Features of this Application

* #### User Authentication :

Secure user registration and login with encrypted credentials

Session-based access to protected routes

* #### Task Management with Kanban Workflow :

Create, edit, and delete tasks

Tasks organized into three columns: To Do, In Progress, and Completed

* #### Drag-and-Drop Functionality :

Move tasks across columns using intuitive drag-and-drop UI powered by @hello-pangea/dnd

* #### Task Metadata :

Includes task title, description, deadline, and creation date

* #### Responsive and User-Friendly Interface :

Clean, minimal UI optimized for all screen sizes

* #### Real-Time Updates :

Tasks update instantly without refreshing the page (React Query caching & refetching)

* #### Role-based Route Protection :

Certain actions or routes accessible only to authenticated users

* #### Mongoose & MongoDB Integration :

Efficient data modeling and CRUD operations for task storage


## Teck Stack

• Frontend: React.js 

• Backend: Node.js with Express.js

• Database: MongoDB with Mongoose ORM

• API: REST 

### Framework/Library Used

* React Js
* React Router
* Tailwind CSS
* Daisy UI
* Node Js
* Mongoose
* Express


### NPM Packages Used
* firebase
* react-icons
* react-toastify
* Sweet Alert 2
* hello-pangea/dnd
* tanstack/react-query
* axios
* framer-motion
* lottie-react
* motion



### Run the project locally step-by-step guideline :

- clone the backend repository and run npm install from the terminal

- create .env file with below credential
```
DB_USER=progresso
DB_PASSWORD=9v2Az1Ebqp1AAgai

```
- then run the server with npm start

- clone the frontend repository 

- open code folder and run npm install 

-in .local.env file paste below credential
```
VITE_apiKey= AIzaSyDCkotitfb4gZTW4Kkgkzx0myz8pFrOyzo
VITE_authDomain= beginner-8b739.firebaseapp.com
VITE_projectId= beginner-8b739
VITE_storageBucket= beginner-8b739.firebasestorage.app
VITE_messagingSenderId= 357346795980
VITE_appId= 1:357346795980:web:756eb830b68e885686bd69
```
- use npm run dev in terminal

- terminal give you a local Server link copy the link and past your browser run the link. 

### Improvement Plan

- will add another route for a separate board to arrange individual tasks

- will implement JWT authentication

- for team based progress board will create an admin control for better tracking and management


### GitHub Repository


**[Client Side](https://github.com/bornilshopno/progresso_client_side)**
**[Server Side](https://github.com/bornilshopno/progresso-server-side-mongoose)**

### Live Page Link:

**https://progresso-board.netlify.app**
