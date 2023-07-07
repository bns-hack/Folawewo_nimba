
# Nimba GuestBook

Nimba is an Entry Management System that allows users to create and manage entries. It provides RESTful APIs for retrieving entries, creating new entries, and deleting entries.

## Features

* Get all entries: Retrieve a list of all entries.
* Create entry: Add a new entry to the system.
* Delete entry: Remove an entry from the system.

## Technologies Used

* Node.js: A JavaScript runtime environment for executing server-side code.
* Express.js: A web application framework for Node.js that simplifies the creation of server-side applications.
* MongoDB: A oSQL database for storing and retrieving data.
* Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
* CORS: A middleware for handling Cross-Origin Resource Sharing.
* Body Parser: A middleware for parsing HTTP request bodies.

## Installation

Clone the repository:

```
git clone https://github.com/Folawewo/nimba.git
```

## Install dependencies:
```
cd <project_folder>
npm install
```

1. Set up environment variables:
Create a **`.env`** file in the project root directory.
Define the following environment variable in the **`.env`** file:
```
MONGO_URI=<your_mongodb_uri>
```
Replace **`<your_mongodb_uri>`** with the URI of your MongoDB database.

2. Start the server:
```
npm start
```

The server will start running on **`http://localhost:80`**

## API Endpoints

### Get all entries
* **Endpoint**: `/entries`
* **Method:** GET
* **Description:** Retrieves a list of all entries.
* **Response:** Array of entry objects.

### Create entry
* **Endpoint:** `/entries`
* **Method:** POST
* **Description:** Creates a new entry.
* **Request Body:** JSON object containing the entry data.
* **Response:** Created entry object.

### Delete entry
* **Endpoint:** `/entries/:id`
* **Method:** DELETE
* **Description:** Deletes an entry by its ID.
* **Parameters:** `id` - The ID of the entry to be deleted.
* **Response:** Success message if the entry is deleted successfully. Error message if the entry is not found.
