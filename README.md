[README.md](https://github.com/user-attachments/files/28668965/README.md)
# Student Performance Prediction System Using ML

A full-stack Machine Learning project built using Django REST Framework, React.js, Scikit-Learn, and Chart.js.

## Features

- Student score prediction using ML
- Django REST API backend
- React frontend dashboard
- Interactive charts using Chart.js
- Responsive UI with Dark Mode

## Local Setup

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend URL:

http://127.0.0.1:8000

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend URL:

http://localhost:3000

## API Endpoint

POST:

http://127.0.0.1:8000/api/predict/

Example Request:

```json
{
  "study_hours": 8,
  "attendance_percent": 90,
  "previous_exam_score": 75
}
```

Example Response:

```json
{
  "predicted_score": 82.5
}
```

## Common Commands

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
npm install
npm start
npm run build
```

## Technology Stack

- Django REST Framework
- React.js
- Scikit-Learn
- Chart.js
- Axios
- SQLite

Happy Coding!
