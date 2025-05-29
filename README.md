📄 README.md
markdown
Copy
Edit
# Vehicle Booking System

A React-based frontend for booking Cars or Bikes, with support for selecting models, brands, and date ranges. Data is fetched from a backend API.

## 🚀 Features

- Choose between 2-wheeler or 4-wheeler
- Fetch vehicle types dynamically based on selection
- Select model and brand from scrollable lists
- Date range picker for booking period
- API integration for vehicle data and booking submission
- Axios used for API communication
- Fully responsive and center-aligned UI

## 🛠️ Technologies

- React
- Axios
- JavaScript
- Node.js/Express backend
- SQLite/PostgreSQL (for storing bookings)

## 📦 Installation

```bash
git clone https://github.com/your-username/vehicle-booking-app.git
cd vehicle-booking-app
npm install
npm start
Make sure your backend server (e.g., on http://localhost:3001) is running and has the /vehicle and /booking endpoints.

📋 API Endpoints
GET /vehicle?type=Car|Bike
Returns a list of vehicles by type.

Response:

json
Copy
Edit
[
  {
    "model": "Hatchback",
    "brand": "Maruti Suzuki Swift",
    "type": "Car"
  }
]
POST /booking
Creates a new booking.

Payload Example:

json
Copy
Edit
{
  "fullName": "John Doe",
  "type": "Car",
  "model": "Hatchback",
  "brand": "Maruti Suzuki Swift",
  "startDate": "2025-06-01",
  "endDate": "2025-06-03"
}
🧱 Database Schema
Table: bookings

Column	Type
id	INTEGER PRIMARY KEY AUTOINCREMENT
fullName	TEXT
type	TEXT
model	TEXT
brand	TEXT
startDate	DATE
endDate	DATE

📷 Screenshots
(Insert screenshots of form and scrollable model/brand list if available)

📄 License
MIT

Made with ❤️ by Jyotirmayi Bissoyi.