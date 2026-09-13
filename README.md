# Souva Food App Backend

**Node.js + Express** backend for a food ordering application. The project follows a clean architecture with **Route → Controller → Service** separation, centralized logging, global error handling, and RESTful APIs for categories, restaurants, and restaurant details.

## Features

* Enterprise Express folder structure
* RESTful APIs
* Categories API
* Restaurant Listing API
* Restaurant Details API with full menu
* Search restaurants by name or cuisine
* Category filtering
* Pagination support
* Winston centralized logging
* Morgan HTTP request logging
* Global error handling
* 404 route handling
* Helmet security headers
* CORS configuration using environment variables
* Environment-based configuration with `.env`

## Tech Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Runtime               |
| Express.js | Backend Framework     |
| Winston    | Logging               |
| Morgan     | HTTP Request Logging  |
| Helmet     | Security              |
| CORS       | Cross-Origin Requests |
| dotenv     | Environment Variables |

## Project Structure

```text
food-ordering-backend/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── data/
│   ├── app.js
│   └── server.js
├── logs/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Architecture

The project follows a layered architecture commonly used in enterprise applications.

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Data Source (JSON)
```

### Responsibility of Each Layer

* **Routes** → Define API endpoints.
* **Controllers** → Handle requests and responses.
* **Services** → Business logic.
* **Data** → JSON datasets (can later be replaced with a database).

## API Endpoints

### Health Check

| Method | Endpoint  |
| ------ | --------- |
| GET    | `/health` |

### API Root

| Method | Endpoint  |
| ------ | --------- |
| GET    | `/api/v1` |

### Categories

| Method | Endpoint             |
| ------ | -------------------- |
| GET    | `/api/v1/categories` |

### Restaurants

| Method | Endpoint                               |
| ------ | -------------------------------------- |
| GET    | `/api/v1/restaurants`                  |
| GET    | `/api/v1/restaurants?page=2&limit=10`  |
| GET    | `/api/v1/restaurants?search=coffee`    |
| GET    | `/api/v1/restaurants?category=cat_003` |
| GET    | `/api/v1/restaurants/:slug`            |

## Restaurant Details

Each restaurant details response includes:

* Restaurant information
* Cover image
* Ratings
* Delivery information
* Pricing
* Offers
* Timings
* Location
* Facilities
* Categorized menu
* Individual menu items with price and availability

Example:

```json
{
  "success": true,
  "message": "Restaurant fetched successfully.",
  "data": {
    "name": "Peter Cat",
    "rating": {
      "value": 4.8
    },
    "menu": [
      {
        "title": "Recommended",
        "items": [
          {
            "name": "Chelo Kebab",
            "price": 545
          }
        ]
      }
    ]
  }
}
```

## Query Parameters

| Parameter | Example   | Purpose            |
| --------- | --------- | ------------------ |
| page      | `1`       | Pagination         |
| limit     | `10`      | Items per page     |
| category  | `cat_003` | Filter by category |
| search    | `coffee`  | Search restaurants |

## Environment Variables

Create a `.env` file.

```env
NODE_ENV=development
PORT=5000
APP_NAME=Food Ordering Backend
API_VERSION=v1
CORS_ORIGIN=http://localhost:5173
LOG_LEVEL=info
```

## Installation

Clone the repository.

```bash
git clone https://github.com/souvascloud/souva-food-app-backend.git
```

Move into the project.

```bash
cd souva-food-app-backend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

## Logging

The application uses **Winston** for centralized logging.

Example output:

```text
2026-09-13 20:45:12 [info] Server started successfully
2026-09-13 20:45:14 [info] GET /api/v1/restaurants 200
2026-09-13 20:45:20 [error] Restaurant not found
```

## Security

The backend includes:

* Helmet security headers
* CORS configuration
* Centralized error handling
* Environment-based configuration

## Future Improvements

* JWT Authentication
* Refresh Tokens
* Database integration (MongoDB/PostgreSQL)
* Redis caching
* Rate limiting
* Request validation (Joi/Zod)
* Docker support
* Unit and Integration Testing
* CI/CD with GitHub Actions

## Author

**Souvanik Saha**

* GitHub: https://github.com/souvascloud

---

Built as an enterprise-style backend project to demonstrate scalable Express.js architecture and REST API development.
