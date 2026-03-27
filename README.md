# Full Stack Web Application

This is a full‑stack web application built with **React (frontend)** and **Node.js/Express (backend)**, using **MongoDB** as the database.  
The project includes authentication (signup/login with JWT), protected routes, and product/task management.  
The application is deployed on **Vercel**.

---

## 🚀 Features
- User authentication (signup & login with JWT)
- Password hashing with **bcrypt**
- Input validation with **Joi**
- Protected routes using middleware
- React frontend with **Reactstrap** UI components
- Toast notifications for success/error messages
- MongoDB integration with **Mongoose**
- Deployment on **Vercel**

---

## 🛠️ Tech Stack
**Frontend:**
- React
- React Router
- Reactstrap
- React Toastify

**Backend:**
- Node.js
- Express.js
- Mongoose
- bcrypt
- jsonwebtoken
- Joi

**Database:**
- MongoDB (Atlas or local)

**Deployment:**
- Vercel

---



---

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ABhijit12345678/auth-application.git
cd your-repo

##  2. Backend Setup

cd backend
npm install

Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8082

Run the backend:

npm start

3. Frontend Setup

cd frontend
npm install

Run the frontend:

npm start

🚀 Deployment on Vercel

Both the frontend and backend are deployed on Vercel.

Frontend Deployment

The frontend React app is deployed on Vercel and accessible via your Vercel frontend URL.

The production build is automatically created by Vercel from your frontend repository.

Backend Deployment

The backend Node.js/Express API is deployed on Vercel as a serverless function or API endpoint.

Ensure your backend environment variables (MONGO_URI, JWT_SECRET) are configured in the Vercel dashboard under your backend project settings.

Environment Variables Setup

In your Vercel dashboard, go to your project settings for both frontend and backend.

Add the necessary environment variables (MONGO_URI, JWT_SECRET) for the backend.

For the frontend, add any public environment variables if needed (e.g., REACT_APP_API_URL pointing to your backend URL).

🔒 Authentication Flow

Signup → User registers with name, email, password. Password is hashed before saving.

Login → User logs in with email & password. JWT token is generated and stored in localStorage.

Protected Routes → Middleware (ensureAuthenticated) verifies JWT before allowing access.

Logout → Clears token and user info from localStorage.

📦 Build

To create a production build of the frontend:

cd frontend
npm run build

This generates a build/ folder that Vercel uses for deployment.

👨‍💻 Author

Developed by Abhijit Behera Full Stack Developer | Passionate about backend & frontend integration

📜 License

This project is licensed under the MIT License.
