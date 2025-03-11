# Quick Bite

Quick Bite is a food e-commerce web application with a dummy backend. This application allows users to browse available meals and place orders.

## Features

-  Browse available meals
-  Place orders
-  Simple JSON-based backend

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/shivraj-roy/quick-bite.git
   ```
2. Navigate to the project directory:
   ```sh
   cd quick-bite
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the backend server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5173` to access the application.

## API Endpoints

### GET /meals

Fetches the list of available meals.

-  **Response:** JSON array of meal objects.

### POST /orders

Places a new order.

-  **Request Body:**
   ```json
   {
     "order": {
       "items": [...],
       "customer": {
         "email": "customer@example.com",
         "name": "Customer Name",
         "street": "Customer Street",
         "postal-code": "12345",
         "city": "Customer City"
       }
     }
   }
   ```
-  **Response:** JSON object with a message indicating the order status.

## License

This project is licensed under the MIT License.
