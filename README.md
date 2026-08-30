Project Overview
The Ministry of Tourism website is a full-stack web application developed during an internship to provide a modern digital platform for exploring Pakistan's tourism, cultural heritage, landmarks, and travel resources.
The application combines a React-based frontend with a Node.js/Express backend and a MongoDB database, and integrates location and mapping services to provide location-based tourism discovery. It gives users an interactive way to discover tourism destinations and cultural attractions across the country.
The Application Provides
? Tourism attraction discovery
? Search and filtering
? Location-based nearby attraction discovery
? Distance calculation
? Google Maps directions
? Tourism publications
? PDF document access
? REST API-based data communication
? MongoDB-based data management
The project was developed as part of an internship and provided practical experience in developing and integrating a complete full-stack web application.
Key Features

Tourism Attractions
Users can browse tourism spots and attractions across different regions of Pakistan. Each attraction contains information such as:
? Name
? Province/Region
? Attraction type
? Description
? Location coordinates
? Image

Search & Filtering
The attractions section provides dynamic search and filtering functionality. Users can:
? Search attractions by name
? Search by region
? Search by attraction type
? Filter attractions by province
? Filter attractions by category
This allows users to quickly find relevant tourism destinations.

Nearby Tourism Spots
The application uses the browser's Geolocation API to obtain the user's current coordinates. The coordinates are then sent to the backend:
Latitude
Longitude
Radius
      ?
Express API
      ?
MongoDB Attractions
      ?
Nearby AttractionsUsers can select different search radiuses, such as:
? 5 km
? 10 km
? 25 km
? 50 km
? 100 km
The system returns tourism spots located within the selected radius and displays the calculated distance from the user's location.
Google Maps Integration
Users can select “Get Directions” for an attraction. The application uses the user's current coordinates as the starting point and the attraction's coordinates as the destination, which opens Google Maps with directions between the two locations.
Location Information
The application uses geographic coordinates to determine the user's approximate location. Reverse geocoding is implemented using the OpenStreetMap Nominatim service to convert latitude and longitude into a readable location name. For example:
Latitude: 33.6844
Longitude: 73.0479
 
        ?
 
Islamabad, PakistanPublications
The publications section provides access to tourism-related documents. Publication information is stored in MongoDB and retrieved through the backend API. Each publication contains:
? Title
? Image
? PDF document path
? Fallback background color
Users can click “Read Me” to open the associated PDF document in a new browser tab.

System Architecture
The application follows a client-server architecture:
                ???????????????????????
                ?       React          ?
                ?      Frontend        ?
                ????????????????????????
                           ?
                     HTTP / REST API
                           ?
                ????????????????????????
                ?      Express.js      ?
                ?       Backend        ?
                ????????????????????????
                           ?
                     Mongoose ODM
                           ?
                ????????????????????????
                ?       MongoDB        ?
                ?       Database       ?
                ????????????????????????External services connected to the frontend include:
? Browser Geolocation API
? OpenStreetMap / Nominatim
? Google Maps
Technologies & Tools
CategoryTechnologiesFrontendReact.js, JavaScript (ES6+), HTML5, CSS3, React Hooks, React RouterBackendNode.js, Express.js, REST APIs, CORS, dotenvDatabaseMongoDB, MongooseAPIs & External ServicesBrowser Geolocation API, OpenStreetMap Nominatim API, Google MapsDevelopment ToolsGit, GitHub, Visual Studio Code, Vite, Nodemon, npm
Project Structure
AI-Powered-Ministry-of-Tourism/
?
??? frontend/
?   ??? public/
?   ?   ??? publications/
?   ?       ??? *.pdf
?   ??? src/
?   ?   ??? assets/
?   ?   ??? components/
?   ?   ??? pages/
?   ?   ??? utils/
?   ?   ??? App.jsx
?   ?   ??? main.jsx
?   ??? package.json
?   ??? vite.config.js
?
??? backend/
?   ??? config/
?   ?   ??? db.js
?   ??? models/
?   ?   ??? Attraction.js
?   ?   ??? Publication.js
?   ??? routes/
?   ?   ??? attractionRoutes.js
?   ?   ??? publicationRoutes.js
?   ??? data/
?   ??? seed.js
?   ??? seedPublications.js
?   ??? server.js
?   ??? package.json
?   ??? .env
?
??? .gitignore
??? README.mdAPI Endpoints
Attractions
Get all attractions
GET /api/attractionsReturns all tourism attractions stored in MongoDB.
Get nearby attractions
GET /api/attractions/nearbyQuery parameters:
? lat
? lng
? radius
Example:
GET /api/attractions/nearby?lat=33.6844&lng=73.0479&radius=10Returns attractions within the specified radius.
Publications
Get all publications
GET /api/publicationsReturns all publications stored in MongoDB.
Database Models
Attraction
The attraction collection stores tourism destination information. Example structure:
{
    name: String,
    region: String,
    type: String,
    description: String,
    latitude: Number,
    longitude: Number,
    image: String
}Publication
The publication collection stores tourism publication information. Example structure:
{
    title: String,
    image: String,
    pdfLink: String,
    fallbackColor: String
}Installation & Setup
Prerequisites
Make sure the following are installed:
? Node.js
? npm
? MongoDB Atlas account
? Git
1. Clone the Repository
git clone https://github.com/faraazzhaider786/AI_Powered_Ministry_of_Tourism_Portal.gitMove into the project:
cd AI-Powered-Ministry-of-Tourism2. Setup Frontend
cd frontend
npm install
npm run devThe frontend will normally run on: http://localhost:5173
3. Setup Backend
Open another terminal:
cd backend
npm install4. Configure Environment Variables
Create a .env file inside the backend directory:
MONGO_URI=your_mongodb_connection_string
PORT=5000Do not upload the .env file to GitHub.
5. Start the Backend
npm run devThe backend will normally run on: http://localhost:5000
6. Seed Database
If the database needs to be populated with initial data:
node seed.jsFor publications:
node seedPublications.jsApplication Data Flow
Attractions
User
 ?
React Attractions Page
 ?
GET /api/attractions
 ?
Express Route
 ?
Mongoose
 ?
MongoDB
 ?
JSON Response
 ?
React State
 ?
Attraction CardsNearby Attractions
User clicks "Find Attractions Near Me"
 ?
Browser Geolocation API
 ?
Latitude + Longitude
 ?
GET /api/attractions/nearby
 ?
Express Backend
 ?
MongoDB
 ?
Nearby Attractions
 ?
React UIPublications
React Publications Page
 ?
GET /api/publications
 ?
Express API
 ?
MongoDB
 ?
Publication Data
 ?
React Cards
 ?
Read Me
 ?
PDF DocumentSecurity
Sensitive configuration values such as the MongoDB connection string are stored in environment variables. The .env file is excluded from Git using .gitignore.
Example:
.env
node_modules/
dist/Development & Debugging
During development, several real-world integration issues were handled, including:
? Frontend/backend CORS configuration
? API connection errors
? MongoDB authentication
? MongoDB IP access configuration
? Environment variable configuration
? React asynchronous data fetching
? Loading and error states
? Backend route configuration
? Database model integration
? Static asset and image path handling
Future Improvements
Possible future enhancements include:
? AI-powered travel planner
? AI tourism assistant
? Voice-based tour guide
? Personalized travel recommendations
? User authentication
? Tourist reviews and ratings
? Favorites/bookmarks
? Advanced map-based attraction discovery
? Weather information for destinations
? Hotel and restaurant recommendations
? Cloud deployment
? Admin dashboard for managing attractions and publications
Learning Outcomes
This project provided practical experience in:
? Full-stack web application development
? React component architecture
? React Hooks and state management
? RESTful API development
? Node.js and Express.js
? MongoDB database integration
? Mongoose ODM
? Asynchronous JavaScript
? API integration
? Browser geolocation
? External service integration
? CORS configuration
? Error handling
? Git and GitHub
? Project structure and modular development
The project helped bridge the gap between learning individual technologies and applying them together to develop a functional, real-world application.
Project Status
Status: Completed as an internship project.
The application was developed as part of an internship and represents practical work in full-stack web development.
License
This project was developed for educational and internship purposes.

