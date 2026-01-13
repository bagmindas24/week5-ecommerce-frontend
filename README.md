# Advanced E-commerce Frontend

## Project Description
A modern e-commerce frontend built with React, featuring a product catalog, shopping cart, user authentication, and responsive design. This project demonstrates advanced frontend development skills and modern web practices.

## Features
- **Product Catalog**: Filtering and sorting options.
- **Interactive Shopping Cart**: Real-time updates and persistence.
- **User Authentication Simulation**: Login/logout functionality.
- **Product Search**: Autocomplete feature.
- **Responsive Design**: Optimized for all devices.
- **Performance Optimizations**: Lazy loading, code splitting, and caching.

## Technologies Used
- **React 18**: Component-based architecture.
- **Redux Toolkit**: State management.
- **React Router**: Routing and navigation.
- **Tailwind CSS**: Styling.
- **Axios**: API calls.
- **LocalStorage**: Data persistence.

## Project Structure
```
week5-ecommerce-frontend/
│── src/
│ ├── components/
│ │ ├── Header/
│ │ ├── ProductCard/
│ │ ├── Cart/
│ │ ├── Checkout/
│ │ └── common/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductDetail.jsx
│ │ └── CartPage.jsx
│ ├── store/
│ │ ├── cartSlice.js
│ │ ├── productSlice.js
│ │ └── userSlice.js
│ ├── services/
│ │ └── api.js
│ ├── utils/
│ ├── App.js
│ └── index.js
│── public/
│── package.json
│── README.md
└── .gitignore
```

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd week5-ecommerce-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:5173`.

## Component Architecture
- **Reusable Components**: Button, ProductCard, etc.
- **Layout Components**: Header, Footer.
- **Pages**: Home, ProductList, ProductDetail, CartPage.
- **State Management**: cartSlice, productSlice, userSlice.

## Key Functionalities
### Product Catalog
- Grid layout for product listing.
- Filtering by category, price, and rating.
- Sorting options (price, name, popularity).
- **Product Comparison**: Compare multiple products side-by-side.

### Shopping Cart
- Add/remove items.
- Update quantities with validation.
- Calculate totals and taxes.
- Persist cart data to `localStorage`.

### User Authentication
- Simulated login/logout functionality.
- Protected routes for checkout.

### Checkout Process
- Form validation for user details.
- Clear cart after successful order.

### Performance Optimization
- Lazy loading for images and routes.
- Code splitting for better performance.
- Caching strategies for faster load times.

## Visual Documentation
### Screenshots
- **Home Page**: Welcome message and product categories.
- **Product List**: Grid layout with filters and sorting.
- **Product Detail**: Detailed view with image gallery.
- **Shopping Cart**: Interactive cart with real-time updates.
- **Checkout**: Form validation and order confirmation.

## Testing Evidence
- **Test Cases**: Validation for cart operations, user authentication, and checkout process.
- **Manual Testing**: Verified functionality across different browsers and devices.

## Quality Standards Checklist
- [x] Clear project goals and objectives.
- [x] Well-organized code structure.
- [x] Responsive design for all devices.
- [x] Performance optimizations implemented.
- [x] Comprehensive documentation.

---

**Author**: Bagmin Das 
**Date**: January 13, 2026