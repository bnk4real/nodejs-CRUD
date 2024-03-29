# NodeJS-CRUD Project README

This project is an implementation of a CRUD (Create, Read, Update, Delete) web application using Node.js, Express, CORS, and PostgreSQL. It follows the principles of Hexagonal Architecture, aiming to provide a modular and maintainable structure.

# Prerequisites
Before running this application, ensure you have the following installed:

- Node.js
- PostgreSQL or any other compatible database provider

# Installation
1. Clone this repository to your local machine:
```bash
   git clone [<repository-url>](https://github.com/bnk4real/nodejs-CRUD.git)
```

2. Navigate into the project directory:
```bash
   cd NodeJS-CRUD
```

3. Install dependencies using npm or yarn:
```bash
   npm install
```

# Configuration
1. Ensure you have PostgreSQL installed and running on your system.
2. Set up your PostgreSQL database and note down the connection details (host, port, username, password, database name).
3. Modify the `.env` file in the project to reflect your database configuration.

# Running the Application
1. After configuring the database, start the application by running:
```bash
   nodemon app.js
```

2. Once the server is running, you can access the CRUD application through your web browser or API testing tool.

# Usage
This CRUD application provides endpoints for performing CRUD operations on entities stored in the database. The available endpoints are typically as follows:

- **GET /**: Retrieve all entities from the database.
- **GET /:id**: Retrieve a specific entity by its ID.
- **POST /create-user**: Create a new entity.
- **PUT /update-user/:id**: Update an existing entity by its ID.
- **DELETE /delete/:id**: Delete an existing entity by its ID.

# Hexagonal Architecture
This project follows the Hexagonal Architecture pattern, also known as Ports and Adapters. This architectural style emphasizes the separation of concerns and the isolation of business logic from external concerns such as databases, frameworks, or UI. In this project, the core business logic is decoupled from the infrastructure, making it easier to maintain, test, and evolve.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
