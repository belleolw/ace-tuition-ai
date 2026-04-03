# Ace Learning AI Dashboard

Ace Learning AI is a prototype **AI-powered adaptive learning dashboard** designed for tuition centres. The system demonstrates how **learning analytics and machine learning** can help students, parents, and teachers monitor academic performance, detect weak topics early, and plan targeted interventions.

This project was built as part of the **IS215 Digital Business & Technology Transformation** module.

---

# System Overview

The system consists of three main components:

```text
React Dashboard (Frontend)
        ↓
Flask API (Backend)
        ↓
Learning Analytics Model (Machine Learning)
        ↓
Student Learning Dataset
```

The frontend dashboards consume analytics insights from the backend API, which runs the machine learning model to generate predictions and insights.

---

# Features

## Student Dashboard
Students can:
- View predicted exam scores
- See topic mastery levels
- Identify weak topics
- Access adaptive practice sets
- Follow AI-generated study plans
- Track personal learning progress

## Parent Dashboard
Parents can:
- Monitor their child’s academic performance
- View progress trends
- Identify weak topics
- Receive AI learning recommendations

## Teacher Dashboard
Teachers can:
- Identify at-risk students
- Analyse class topic performance
- View topic analytics
- Plan teaching interventions

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router

## Backend
- Flask
- Flask-CORS
- Flask-RESTX (Swagger API documentation)

## Machine Learning
- Python
- pandas
- numpy
- scikit-learn

---

# Project Structure

```text
ace-learning-AI
│
├─ ace-learning-frontend
│   ├─ src
│   │   ├─ assets
│   │   ├─ layouts
│   │   ├─ pages
│   │   │   ├─ student
│   │   │   ├─ parent
│   │   │   └─ teacher
│   │   ├─ config
│   │   │   └─ api.js
│   │   ├─ utils
│   │   │   └─ auth.js
│   │   ├─ App.jsx
│   │   ├─ main.jsx
│   │   └─ router.jsx
│   │
│   ├─ public
│   ├─ package.json
│   └─ dist
│
├─ ace-learning-backend
│   ├─ requirements.txt
│   ├─ api
│   │   └─ index.py
│   └─ learning-analytics
│       ├─ data
│       │   └─ student_learning_data.csv
│       └─ learning_analytics_model
│           ├─ app.py
│           └─ learning_analytics_model.py
│
├─ .gitignore
└─ README.md
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/belleolw/ace-tuition-ai.git
cd ace-tuition-ai
```

---

# Running the Full System

This project consists of a **React frontend** and a **Flask backend**.
You must run both services concurrently.

---

## 2. Backend Setup (Flask API)

Navigate to backend:

```bash
cd ace-learning-backend
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run backend API

```bash
cd learning-analytics/learning_analytics_model
python app.py
```

Backend will run at:

```text
http://127.0.0.1:5001
```

---

## 3. Frontend Setup (React Dashboard)

Open a new terminal and run:

```bash
cd ace-learning-frontend
npm install
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## 4. Login Instructions

Once the frontend is running:

- Open: http://localhost:5173
- Enter any test Student ID (e.g. S044, S005, S091)

---

## 5. Optional: API Entry Point

If using the alternative API structure:

```bash
cd ace-learning-backend/api
python index.py
```

---

## Notes

- Ensure backend is running before frontend
- If API errors occur, verify API base URL in:

```text
ace-learning-frontend/src/config/api.js
```

- Default backend URL:

```text
http://127.0.0.1:5001
```

---

# API Documentation

Open Swagger UI:

```text
http://127.0.0.1:5001/swagger
```

---

# Key Endpoints

### Health Check
```text
GET /api/health
```

### Student Analytics
```text
GET /api/student/{student_id}
```

### Topic Analytics
```text
GET /api/topic-analytics
```

### Teacher Focus List
```text
GET /api/teacher/focus-list
```

---

# Machine Learning Model

Models used:
- Linear Regression → Predict exam scores
- Logistic Regression → Classify student risk

Features engineered:
- topic mastery
- learning efficiency
- attempt efficiency
- improvement trends

---

# Purpose

Demonstrates a shift from traditional tuition to a **data-driven adaptive learning system** using:
- predictive analytics
- early risk detection
- personalised recommendations

---

# Future Improvements

- Real student data integration
- Adaptive question generation
- Reinforcement learning for practice
- AI-generated exam papers
