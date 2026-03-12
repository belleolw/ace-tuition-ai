# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Ace Tuition AI Dashboard

Ace Tuition AI is a prototype AI-powered adaptive learning dashboard designed for tuition centres. The system demonstrates how data analytics and AI insights can help students, parents, and teachers monitor academic performance, detect weak topics early, and plan targeted interventions.

This project was built as part of the **IS215 Digital Business & Technology Transformation** module.

---

# Features

## Student Dashboard
Students can:
- View predicted exam scores
- See topic mastery heatmaps
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

# Project Structure

```
src
 ├─ layouts
 │   └─ DashboardLayout.jsx
 │
 ├─ pages
 │   ├─ student
 │   │   ├─ StudentDashboard.jsx
 │   │   ├─ StudentPractice.jsx
 │   │   ├─ StudentStudyPlan.jsx
 │   │   ├─ StudentProgress.jsx
 │   │   └─ AlgebraDrillSet.jsx
 │   │
 │   ├─ parent
 │   │   ├─ ParentDashboard.jsx
 │   │   ├─ ParentChildProgressPage.jsx
 │   │   ├─ ParentWeakTopicsPage.jsx
 │   │   └─ ParentRecommendationsPage.jsx
 │   │
 │   └─ teacher
 │       ├─ TeacherDashboard.jsx
 │       ├─ TeacherAtRiskPage.jsx
 │       ├─ TeacherTopicAnalyticsPage.jsx
 │       └─ TeacherInterventionPage.jsx
```

The **DashboardLayout** component provides a shared navigation bar, profile dropdown, and sign-out functionality for all dashboards.

---

# Tech Stack

Frontend
- React
- Vite
- Tailwind CSS
- React Router

Design
- SaaS-style analytics dashboards
- Component-based layout system

---

# Setup Instructions

## 1. Clone the repository

```
git clone https://github.com/belleolw/ace-tuition-ai.git
cd ace-tuition-ai
```

## 2. Install dependencies

```
npm install
```

## 3. Run the development server

```
npm run dev
```

Then open the local server shown in the terminal (usually):

```
http://localhost:5173
```

---

# Authentication (Prototype)

The system currently uses a **simple login screen** for demonstration purposes.

Signing out from the profile dropdown returns users to the login page.

---

# Purpose of the Project

This system demonstrates how tuition centres can digitally transform from a **traditional classroom model** to a **data-driven adaptive learning platform**.

Key concepts demonstrated:

- Predictive performance analytics
- AI-generated study recommendations
- Early detection of learning gaps
- Teacher intervention planning
- Parent transparency through dashboards

---

# Future Improvements

Potential extensions of the platform include:

- Machine learning model for exam score prediction
- AI-generated question banks
- Adaptive learning difficulty engine
- Automated mock exam generator
- Real student data integration
