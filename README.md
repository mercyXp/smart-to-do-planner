---

# 🧠 Smart To-Do Planner

A productivity-focused web application that helps users **set long-term goals**, **break them into smaller daily/weekly tasks**, and **analyze their progress** over time.

This project aims to make planning smarter — by combining **intuitive design**, **data-driven insights**, and **automation** to help users stay consistent with their goals.

---

## Project Overview

The **Smart To-Do Planner** is more than just a regular task manager.
It’s a personal productivity companion that allows users to:

* Set **long-term goals** (e.g., “Become a Full-Stack Developer in 6 months”)
* Break them down into **manageable milestones** (weekly, daily tasks)
* Track **progress automatically** through insightful analytics
* Visualize completion rates, productivity streaks, and time spent

---

## 🧩 Tech Stack

| Layer                  | Technology                      | Purpose                                                                  |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------ |
| **Frontend**           | **React.js**                    | Provides a dynamic and component-based UI experience                     |
| **Styling**            | **Tailwind CSS**                | Enables rapid and responsive UI development with utility-first design    |
| **Backend**            | **Django (Python)**             | Handles data processing, business logic, and analytics                   |
| **Database**           | **SQLite / PostgreSQL**         | Stores user goals, tasks, progress, and insights                         |
| **API**                | **Django REST Framework (DRF)** | Provides structured RESTful endpoints for frontend-backend communication |
| **State Management**   | React Hooks / Context API       | Manages app-wide state like task updates, filters, and authentication    |
| **Charts & Analytics** | Chart.js / Recharts             | Displays progress insights and weekly activity trends                    |

---

## Why This Stack

### React.js + Tailwind CSS

* Chosen for **modern, fast, and modular UI**.
* Allows reusable components and real-time UI updates.
* Tailwind accelerates styling while maintaining a consistent design system.

### Django + Django REST Framework

* Chosen for its **robust backend structure**, **security features**, and **rapid development** capabilities.
* Django’s ORM simplifies database interactions.
* DRF easily exposes the backend as REST APIs, making it perfect for integration with React.

### ⚙️ Integration Benefits

* The **React frontend** consumes **Django REST APIs** efficiently.
* Ensures clear separation of concerns — UI (frontend) and logic (backend).
* Django handles heavy lifting: task analytics, goal progress calculation, and authentication.
* React handles interactivity: drag-drop tasks, responsive design, and dashboard charts.

---

## 🧾 Key Features

- Create and manage **long-term goals**
-  Break goals into **weekly and daily tasks**
-  View **progress analytics and trends**
-  Get **completion rate insights**
-  Beautiful, **responsive UI** for desktop and mobile
-  Secure **user authentication** and data persistence

---

## 🗂️ Folder Structure

```
smart-todo-planner/
|
├── backend/
├── frontend/
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 🔹 Frontend (React)

```bash
cd frontend
npm install
npm start
```

The React app will typically run on **[http://localhost:3000](http://localhost:3000)**
The Django API will run on **[http://localhost:8000](http://localhost:8000)**

---

## 📊 Future Improvements

* 🧩 AI-based task recommendations
* 📅 Calendar integration
* 🔔 Smart reminders and notifications
* 📈 Productivity scoring system
* ☁️ Cloud synchronization

---

## 👩‍💻 Author

**Mercy Munzenzi**
Tech Enthusiast | Backend Developer | DevOps Engineer in training
🌐 [LinkedIn](https://www.linkedin.com/in/mercy-munzenzi-183056362/)

---


