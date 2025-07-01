# WanderLust
A full-stack Node.js application for managing travel listings — create, view, and explore beautiful destinations!

  Features
    1) Create, edit, and delete listings
    2) Map integration (location-based listings)
    3) User authentication
    4) Image upload support (using Cloudinary)
    5) Input validation & error handling
    6)MVC architecture with modular routing
    
  Project Structure
.
├── controllers/        # Logic for listing, auth, etc.
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
├── utils/              # Helper functions
├── init/               # DB connection/config
├── node_modules/       # Dependencies
├── .env                # Environment variables (not tracked)
├── index.js            # Entry point

  Tech Stack
    - Backend: Node.js, Express.js
    - Database: MongoDB with Mongoose
    - Templating Engine: EJS
    - Authentication: Passport.js
    - Image Upload: Cloudinary
    - Environment Management: dotenv
    
  How to Run Locally
    1. Clone the repository

       git clone https://github.com/Drako-00000/WanderLust.git
       cd WanderLust
     
    2. Install dependencies

       npm install

    4. Run the app

       npm start

       The app runs on http://localhost:8080
   
Author
Made by Satyam Pandey (https://github.com/Drako-00000)

