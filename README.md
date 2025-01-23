# E-commerce Website

This is a modern, fully functional e-commerce website built using the Vite bundler. The project includes various features like a toast notification system, an integrated payment gateway, and other essential functionalities for an e-commerce platform.

## Features
- **Toast Notifications**: Instant feedback for user actions like adding to cart, successful payments, and more.
- **Payment Gateway**: Secure and seamless payment processing.
- **Cart System**: Add, remove, and update products in the shopping cart.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Vite, CSS
- **Backend**: formSpree-API

## Installation

### Prerequisites

- Node.js (>= 16.x)
- A payment gateway account (e.g., Stripe, PayPal, Phonepay)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshCodeCraft21/E-Commerce-Website.git
   cd E-Commerce-Website
   ```

2. Configure environment variables:
   - Create `.env` files in both `server` and `client` directories.
   - Example for `server/.env`:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PAYMENT_GATEWAY_API_KEY=your_payment_gateway_api_key
     ```
   - Example for `client/.env`:
     ```env
     VITE_API_URL=http://localhost:5000
     VITE_PAYMENT_GATEWAY_PUBLIC_KEY=your_public_key
     ```

3. Access the app at `http://localhost:5173`.

## Scripts

### Start Script
- `npm run dev`: Start the development server with hot reloading

### Frontend

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build

## Deployment

To deploy the project:

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```
## Contribution

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- [Vite Documentation](https://vitejs.dev/)
- [MERN Stack Tutorial](https://www.mongodb.com/mern-stack)
- [Toastify](https://fkhadra.github.io/react-toastify/)
- [Your Payment Gateway](https://your-payment-gateway.com)

---

**Happy Coding!** 🎉
