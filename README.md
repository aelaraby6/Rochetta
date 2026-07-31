# Rochetta - Online Pharmacy Platform

Rochetta is a full-stack MERN web application designed to simulate a real-world pharmacy environment. It enables users to browse and purchase medications (with strip or full-box options, and prescription verification where necessary) and provides administrators with a dashboard to manage catalog operations.

A video preview demonstrating the application in action can be accessed below:

https://github.com/user-attachments/assets/af45da40-58fa-482b-bea2-388e67cd7468

---

## Table of Contents
1. [Key Features](#key-features)
   - [Customer Features](#customer-features)
   - [Administrator Features](#administrator-features)
   - [New Branch Features and Refactors](#new-branch-features-and-refactors)
2. [Technical Interface Preview](#technical-interface-preview)
   - [User Authentication Interfaces](#user-authentication-interfaces)
   - [Shopping Cart](#shopping-cart)
3. [System Architecture and Tech Stack](#system-architecture-and-tech-stack)
   - [Frontend (Client)](#frontend-client)
   - [Backend (Server)](#backend-server)
4. [Directory Structure](#directory-structure)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
6. [Quality Assurance and CI Pipelines](#quality-assurance-and-ci-pipelines)
7. [Database Design (ERD)](#database-design-erd)
8. [API Documentation](#api-documentation)
9. [Contributors](#contributors)

---

## Key Features

### Customer Features
* **Catalog Exploration:** Browse and filter medications by therapeutic categories.
* **Flexible Purchasing:** Purchase medicines by the individual strip or by the full box.
* **Prescription Control:** Certain medications are marked as requiring a prescription and cannot be checked out without upload/pharmacist review.
* **Cart and Orders:** Live management of cart quantities and real-time checkout flows.
* **Profile Management:** View order histories, manage delivery addresses, and track pending prescriptions.
* **Responsive Styling:** Fully optimized for mobile, tablet, and desktop views.

### Administrator Features
* **Catalog Management:** Create, read, update, and delete products, including product images uploaded directly to Cloudinary.
* **Inventory Control:** Monitor stock, change pricing structures, and manage categories.
* **Authentication Controls:** View and manage user accounts and system permissions.

### New Branch Features and Refactors
This branch (`refactor/cart-backend`) introduces several structural improvements and new platform components:
* **AI-Powered Admin Dashboard:** Added real-time revenue telemetry charts, inventory management tables, and a specialized AI Analytics Tab for sales prediction and forecasting.
* **Refactored Cart Backend:** Completely rewritten database schemas and controller endpoints for the cart module. This ensures atomic database updates, handles inventory reservation edge-cases, and speeds up shopping cart load times.
* **Continuous Integration Pipelines:** Integrated automated linting, type-checking, and build validation configurations on GitHub Actions for both the frontend and backend.

---

## Technical Interface Preview

### User Authentication Interfaces
The platform implements secure login and registration pages with JWT-based authentication.

<img width="1810" height="857" alt="Signup Interface" src="https://github.com/user-attachments/assets/a3c671c8-46fa-481f-9c28-2fe752f858e2" />

<img width="1851" height="861" alt="Login Interface" src="https://github.com/user-attachments/assets/96340a29-4ada-4845-818c-fbc9b6034331" />

### Shopping Cart
A centralized view for reviewing, updating quantities, or removing selected items before checking out.

<img width="1232" height="717" alt="Shopping Cart Interface" src="https://github.com/user-attachments/assets/46792721-5840-4be1-9c6c-9cce164097ca" />

---

## System Architecture and Tech Stack

### Frontend (Client)
* **Framework:** React.js (Vite bundler)
* **State Management:** Redux Toolkit & RTK Query
* **Routing:** React Router DOM
* **Form Handling:** React Hook Form & Zod Validation
* **Styling:** Tailwind CSS

### Backend (Server)
* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database Access:** Mongoose (MongoDB ODM)
* **Security:** Helmet, Express Rate Limit, Express Mongo Sanitize, HPP (HTTP Parameter Pollution protection), and XSS-clean.
* **Storage Provider:** Cloudinary (for media uploads)
* **API Documentation:** Swagger UI (integrated with swagger-jsdoc)

---

## Directory Structure

```text
├── Client/                  # Frontend application (Vite + React)
│   ├── src/                 # React source code (components, store, router, pages)
│   ├── eslint.config.js     # Frontend linting rules
│   └── package.json         # Frontend dependencies and scripts
├── Server/                  # Backend application (Express)
│   ├── config/              # Database and environment configurations
│   ├── controllers/         # Request handling logic
│   ├── models/              # Mongoose schemas
│   ├── routers/             # API route definitions
│   ├── services/            # Services (AI, Email, JWT)
│   ├── eslint.config.js     # Backend linting rules
│   └── package.json         # Backend dependencies and scripts
└── .github/
    └── workflows/           # CI/CD GitHub Actions pipelines
```

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
* Node.js (v18.x or above)
* npm (v9.x or above)
* MongoDB (Local instance or MongoDB Atlas URI)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aelaraby6/PharmaXpress.git
   cd PharmaXpress
   ```

2. **Configure the Backend (Server):**
   Navigate to the `Server` folder and install dependencies:
   ```bash
   cd Server
   # Install dependencies
   npm install
   ```
   Create a `.env` file in the `Server` directory based on the following template:
   ```env
   NODE_ENV=development
   PORT=4000
   MONGO_URI=your_mongodb_connection_uri
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   EMAIL_USER=your_smtp_email_address
   EMAIL_PASS=your_smtp_app_password
   GROQ_API_KEY=your_groq_ai_api_key
   ```

3. **Configure the Frontend (Client):**
   Navigate to the `Client` folder and install dependencies:
   ```bash
   cd ../Client
   # Install dependencies
   npm install
   ```

### Running the Application

* **Start Backend Server:**
   Navigate to the `Server` folder and run:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:4000`.

* **Start Frontend Client:**
   Navigate to the `Client` folder and run:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## Quality Assurance and CI Pipelines

This repository is configured with automated Continuous Integration (CI) checks on GitHub Actions that trigger on pushes and pull requests targeting the main branch.

* **Frontend Quality Check:** Verifies that the client project compiles without any ESLint warnings or build-time compilation errors.
* **Backend Quality Check:** Runs ESLint on the Express server folder to ensure consistency, variable safety, and code quality.

To run the linters locally:
* For Frontend: `cd Client && npm run lint`
* For Backend: `cd Server && npm run lint`

---

## Database Design (ERD)

The entity relationships mapping the collection schemas (Users, Products, Orders, Carts, etc.) are illustrated below:

<img width="1279" height="1236" alt="Database Entity Relationship Diagram" src="https://github.com/user-attachments/assets/9c884abb-57b5-49ea-a170-a93e05090fb3" />

---

## API Documentation

The backend incorporates an interactive **Swagger UI** for testing and exploring api endpoints.

<img width="650" height="557" alt="Swagger Endpoints Overview" src="https://github.com/user-attachments/assets/8e7b37e4-4437-466b-97c4-6bae8c5a2304" />

<img width="642" height="820" alt="Swagger Interactive Testing" src="https://github.com/user-attachments/assets/f4df8277-ceee-4a8d-9137-fa854252b430" />

---

## Contributors

The Rochetta project is developed and maintained by the following contributors:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/aelaraby6">
        <img src="https://avatars.githubusercontent.com/u/154278999?v=4" width="100px;" alt=""/>
        <br /><sub><b>Abdelrahman Elaraby</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Abdelrahman-M-Selim">
        <img src="https://avatars.githubusercontent.com/u/223935419?v=4" width="100px;" alt=""/>
        <br /><sub><b>Abdelrahman Selim</b></sub>
      </a>
    </td>
  </tr>
</table>
