# Rochetta – Online Pharmacy Platform

Rochetta is a MERN-Stack web application that provides a seamless experience for users to purchase medicines online and for admins to manage pharmacy operations.



https://github.com/user-attachments/assets/af45da40-58fa-482b-bea2-388e67cd7468


---

## Features

### User Features
- Browse medicines by categories.
- Choose between purchasing a **strip** or a **full box**, just like a real pharmacy.
- Add medicines to the Cart and manage quantities.
- Place an Order.
- Some medicines **require a prescription** (cannot be purchased without a prescription).


### Admin Features
- Add new products with images, prices, and details.
- Edit or delete existing products.


<img width="1810" height="857" alt="signup" src="https://github.com/user-attachments/assets/a3c671c8-46fa-481f-9c28-2fe752f858e2" />

<img width="1851" height="861" alt="login" src="https://github.com/user-attachments/assets/96340a29-4ada-4845-818c-fbc9b6034331" />

<img width="1232" height="717" alt="cart" src="https://github.com/user-attachments/assets/46792721-5840-4be1-9c6c-9cce164097ca" />


---

## 🖥️ Tech Stack

### **Frontend**
- React.js 
- React Router DOM
- Tailwind
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication & Bcrypt for password hashing
- **Cloudinary** for product image uploads
- **Rate Limiting** for security
- **Validation with Joi** for request validation
- **Swagger** for API documentation

---

## Frontend – Features
- **Home Page** – Showcase top products and quick navigation to categories.
- **Cart Page** – View, update, and remove products from the cart.
- **Profile Page** – Display user details and manage account.
- **Categories Page** – Browse products by category.
- **Authentication** – Sign Up & Login functionality with **JWT stored in Local Storage**.
- **Dark Mode** – Toggle between light and dark themes.
- **Product Search** – Search for products by name or keyword.
- **404 Page** – Custom page for invalid routes.
- **Responsive Design** – Built with Bootstrap for mobile-friendly UI.

---

## Backend – Features
- **Authentication & Authorization** – Secure login/register using JWT & bcrypt with role-based access (User/Admin).
- **Product Management** – Admin can add, edit, and delete products with images uploaded to **Cloudinary**.
- **Order Management** – Create, update, and manage orders with different statuses.
- **Cart Management** – Add, update, and remove items in the cart.
- **Validation** – Request validation with **Joi** for products, users, and orders.
- **Security** – Implemented **Rate Limiting** and password hashing to prevent brute-force attacks.
- **API Documentation** – Integrated **Swagger UI** for interactive API exploration and testing.
- **Database** – Built with MongoDB & Mongoose for schema modeling and data relationships.


---

### Use Cases

<img width="894" height="197" alt="Admin" src="https://github.com/user-attachments/assets/2396b164-c8d4-419a-a0f5-1b05cb55821f" />

<img width="366" height="191" alt="Auth" src="https://github.com/user-attachments/assets/0e49cbd5-6eff-4c61-bdf0-9214f22e628a" />

<img width="735" height="878" alt="User" src="https://github.com/user-attachments/assets/73dba00f-512c-43eb-a95b-4df6e3e4fae0" />

---

### ERD 
Below is the **ERD** representation of the system:  

<img width="1279" height="1236" alt="erd" src="https://github.com/user-attachments/assets/9c884abb-57b5-49ea-a170-a93e05090fb3" />

---

## API Endpoints – Screenshots
Here are sample screenshots from **Swagger UI** showing the API endpoints:

<img width="650" height="557" alt="first" src="https://github.com/user-attachments/assets/8e7b37e4-4437-466b-97c4-6bae8c5a2304" />

<img width="642" height="820" alt="second" src="https://github.com/user-attachments/assets/f4df8277-ceee-4a8d-9137-fa854252b430" />

---

## Contributors

Thanks goes to these wonderful people in the Fullstack team:

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

