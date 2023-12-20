Assignment-Metasky Dashboard
Project Overview
The "assignment-metasky" project is a React dashboard application built using React.js and TypeScript. The primary goal is to create a user-friendly dashboard with the following features:

Features
Login Page

Provides a login interface with dummy login details for user authentication.
User Table

Displays a table containing a list of users fetched from the Random User Generator API using Axios.
Utilizes MUI (Material-UI) components for a clean and responsive design.
Authentication and State Management

Implements Redux for state management.
Ensures the app remembers the login state, preventing access to the user list without authentication.
Leverages custom hooks for logic related to API data retrieval.
User Search

Enables user search functionality by name.
Performance Optimization

Utilizes a custom hook to efficiently fetch data from the Random User Generator API.

Hosting

Hosted on Netlify or Vercel for easy access.
Project Structure
Components

Home.tsx: Renders the user table and handles data fetching.
Login.tsx: Manages the login page interface and user authentication.
Redux

authReducer.ts: Defines the authentication reducer, actions, and initial state.
authActions.ts: Contains action creators for login, logout, and storing user details.
Utilities

authBackgroundImage.jpg: Background image for the login page.
How to Run the Project
Clone the repository:

bash
Copy code
git clone https://github.com/vandana104/assignment-metasky.git
Install dependencies:

bash
Copy code
cd assignment-metasky
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the dashboard.

Deployment
The project is deployed on Netlify, ensuring easy access to the live application.
Hosted url : assignment-metasky.netlify.app

Performance Considerations
The project leverages the following techniques for optimal load times and performance:

Custom Hook for API Data: Implements a custom hook to efficiently fetch data from the Random User Generator API.
Material-UI (MUI): Enhances the user interface with responsive and optimized components.
Redux State Management: Manages application state, preventing unnecessary re-renders and improving overall performance.
Project Repository
The public GitHub repository https://github.com/vandana104/assignment-metasky.git 

Feel free to explore, contribute, or provide feedback!