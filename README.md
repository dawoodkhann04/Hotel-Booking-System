# Major Project

## Overview

Major Project is a full-stack web application built with Node.js, Express, MongoDB, and EJS. It provides a platform for users to create, view, and manage listings, reviews, and user accounts. The project leverages modern authentication, session management, cloud storage, and interactive UI components.


## Features

- **User Authentication:** Secure registration, login, and session management using Passport.js.
- **Listings Management:** Create, edit, delete, and view property listings with image uploads via Cloudinary.
- **Reviews:** Add and manage reviews for listings.
- **Flash Messages:** User feedback for actions and errors.
- **Responsive UI:** Built with EJS templates and Bootstrap.
- **Map Integration:** Display listing locations using Mapbox.
- **Validation:** Robust input validation using Joi.
- **RESTful Routing:** Clean, maintainable API endpoints.
- **Error Handling:** Custom error classes and middleware for graceful error responses.


## Technologies Used

- **Node.js** (v22.17.1)
- **Express** (v5.1.0)
- **MongoDB** & **Mongoose** (v8.16.3)
- **EJS** & **EJS-Mate** (v3.1.10, v4.0.0)
- **Passport.js** & **Passport-Local-Mongoose**
- **Cloudinary** & **Multer**
- **Mapbox SDK**
- **Joi** (validation)
- **Connect-Flash**, **Express-Session**, **Connect-Mongo**
- **Dotenv** (environment variables)


## Getting Started

### Prerequisites

- Node.js v22.17.1
- MongoDB instance (local or Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (for map integration)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/major-project.git
   cd major-project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory with the following:

   ATLASDB_URL=your_mongodb_connection_string
   SECRETE=your_session_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_token

4. **Run the application:**
  
   npm start
   
   Or, for development with auto-restart:
   
   npx nodemon app.js
   

---

## Folder Structure


Major Project/
├── app.js
├── models/
│   ├── user.js
│   ├── listing.js
│   └── review.js
├── routes/
│   ├── user.js
│   ├── listing.js
│   └── review.js
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   └── error.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── map.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── package.json
└── .env


---

## Usage

- **Listings:** Browse, create, edit, and delete property listings.
- **Reviews:** Add reviews to listings.
- **Authentication:** Register and log in to manage your listings and reviews.
- **Map:** View listing locations on an interactive map.
- **Flash Messages:** Get feedback for your actions.

---

## API Endpoints

- `/listings` - Manage listings
- `/listings/:id/reviews` - Manage reviews for a listing
- `/users` - User registration and authentication


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


## License

This project is licensed under the ISC License.


## Author

Developed by Dawood Khan.


## Troubleshooting

- Ensure all environment variables are set correctly.
- Make sure MongoDB and Cloudinary credentials are valid.
- If you encounter errors related to EJS layouts, check that all layout paths use relative syntax (e.g., `layout("layouts/boilerplate")`).

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)