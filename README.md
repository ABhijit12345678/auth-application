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

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/ABhijit12345678/auth-application.git
cd auth-application
````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8082
```

Run the backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Run the frontend:

```bash
npm start
```

---

## 🚀 Deployment on Vercel

Both the **frontend** and **backend** are deployed on **Vercel**.

### Frontend Deployment

* The frontend React app is deployed on Vercel and accessible via your Vercel frontend URL.
* The production build is automatically created by Vercel from your frontend repository.

### Backend Deployment

* The backend Node.js/Express API is deployed on Vercel as a serverless function or API endpoint.
* Ensure your backend environment variables (`MONGO_URI`, `JWT_SECRET`) are configured in the Vercel dashboard under your backend project settings.

---

## 🔒 Authentication Flow

1. **Signup** → User registers with name, email, password. Password is hashed before saving.
2. **Login** → User logs in with email & password. JWT token is generated and stored in localStorage.
3. **Protected Routes** → Middleware (`ensureAuthenticated`) verifies JWT before allowing access.
4. **Logout** → Clears token and user info from localStorage.

---

## 📦 Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

This generates a `build/` folder that Vercel uses for deployment.

Screenshots
<img width="886" height="477" alt="image" src="https://github.com/user-attachments/assets/3e5a791a-983a-4757-821d-c8644a897b7e" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/7cb97c1a-6035-4023-b9c7-032ebcc75740" />


---

## 👨‍💻 Author

Developed by **Abhijit Behera**\
Full Stack Developer | Passionate about backend & frontend integration

---

## 📜 License

This project is licensed under the MIT License.

```
```
This project is licensed under the MIT License.
