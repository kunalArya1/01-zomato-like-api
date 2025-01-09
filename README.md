_Case Study: Building a Zomato-like Restaurant API_

### **Goal**

The goal is to create a set of API endpoints that allow users to perform various actions related to restaurants, such as:

- Creating, reading, updating, and deleting restaurants
- Managing menus
- Adding user reviews


---

### **Database Schema**

The database includes the following collections:

1. **Restaurants**
2. **User Reviews**
3. **User Profiles**

---

### **Features to Implement**

### **1. Restaurant Management**

- Create a new restaurant.
- Retrieve restaurant details by name.
- Retrieve a list of all restaurants.
- Retrieve restaurants by cuisine type.
- Update restaurant information (e.g., rating, address) by ID.
- Delete a restaurant by ID.
- Search for restaurants by location (city or address).

### **2. Menu Management**

- Add a dish to a restaurant's menu.
- Remove a dish from a restaurant's menu.

### **3. User Reviews**

- Allow users to add reviews and ratings for a restaurant.
- Retrieve user reviews for a specific restaurant.
- Calculate and update the average ratings for all restaurants based on user reviews.

---

### **Implementation Steps**

### **Step 1: Create a Restaurant Model**

Use Mongoose to create the **Restaurant** model with the following fields:

- **name**: The name of the restaurant
- **cuisine**: The type of cuisine offered by the restaurant
- **address**: The address of the restaurant
- **city**: The city where the restaurant is located
- **rating**: Rating on a scale of 0 to 5 (default: 0)
- **menu**: An array of menu items offered by the restaurant. Each menu item includes:
  - **name**: The name of the menu item
  - **price**: The price of the menu item
  - **description**: The description of the menu item
  - **isVeg**: Whether the item is vegetarian (boolean)
- **averageRating**: The average rating of the restaurant (default: 0)

---

### **Step 2: Create a Restaurant**

- Create a function `createRestaurant` that accepts an object containing restaurant data and adds a new restaurant to the database.

### **Step 3: Read a Restaurant**

- Create a function `readRestaurant` that accepts the restaurant name and retrieves the restaurant details from the database.

### **Step 4: Read All Restaurants**

- Create a function `readAllRestaurants` that retrieves all restaurants from the database.

### **Step 5: Read Restaurants by Cuisine**

- Create a function `readRestaurantsByCuisine` that accepts a cuisine type and retrieves all restaurants with that cuisine.

### **Step 6: Update a Restaurant by ID**

- Create a function `updateRestaurant` that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID.

### **Step 7: Delete a Restaurant by ID**

- Create a function `deleteRestaurant` that accepts a restaurant ID and deletes the restaurant with the provided ID.

### **Step 8: Search Restaurants by Location**

- Create a function `searchRestaurantsByLocation` that accepts a location and retrieves all restaurants located in that area.

### **Step 9: Filter Restaurants by Rating**

- Create a function `filterRestaurantsByRating` that accepts a minimum rating and retrieves all restaurants with ratings greater than or equal to the specified value.

**Reference:**

Documentation: [Mongoose Queries](https://mongoosejs.com/docs/2.7.x/docs/query.html#gte)

Example Query:

```jsx
javascript
Copy code
await Users.find({ age: { $gte: 18 } });

```

---

### **Step 10: Add a Dish to a Restaurant's Menu**

- Create a function `addDishToMenu` that accepts a restaurant ID and a new dish object and adds the dish to the specified restaurant's menu.

### **Step 11: Remove a Dish from a Restaurant's Menu**

- Create a function `removeDishFromMenu` that accepts a restaurant ID and the name of a dish to remove from the restaurant's menu.

### **Step 12: Add a User Review and Rating for a Restaurant**

- Create a function `addRestaurantReviewAndRating` that allows a user to add a review and rating for a restaurant.
- Add a `reviews` array of objects with the following fields:
  - **rating**: The rating given by the user
  - **text**: The review text
  - **user**: Reference to the user who wrote the review

### **Step 13: Retrieve User Reviews for a Restaurant**

- Create a function `getUserReviewsForRestaurant` that retrieves all user reviews for a specific restaurant.
