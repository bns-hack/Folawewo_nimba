
# Nimba Environment

This is a Bunnyshell environment configuration for Nimba template, which consists of a backend and frontend application.

## Overview
Nimba guestbook project aims to provide a scalable and efficient solution for a web application. It comprises a backend and frontend application, each running in its respective Docker container.

## Components

### Backend
* Repository: **https://github.com/Folawewo/nimba.git**
* Branch: main
* Application Path: backend

The backend application handles the server-side logic and API endpoints for Nimba. It is built using the provided Dockerfile and exposes port 80.

Access the backend application via the following hostname: **`backend-{{ env.base_domain }}`**

### Frontend
* Repository: **https://github.com/Folawewo/nimba.git**
* Branch: main
* Application Path: frontend

The frontend application provides the user interface and client-side functionality for Nimba. It is built using the provided Dockerfile and listens on port 3000.

Access the frontend application via the following hostname: **`frontend-{{ env.base_domain }}`**

## Environment Variables
* **`MONGO_URI`**: <<BNS_SECRET>> (Please replace <<BNS_SECRET>> with the actual MongoDB URI)

Make sure to provide the appropriate MongoDB URI as an environment variable to establish a connection to your MongoDB database.

## Usage
1. Clone Nimba repository.
2. Modify any necessary configurations or code within the backend and frontend applications.
3. Commit and push your changes to the repository.
4. Bunnyshell will automatically build and deploy the updated versions of the backend and frontend applications based on the defined Dockerfiles and configurations.
5. Access Nimba application by using the provided hostnames and specified ports for the backend and frontend.

## Note
* Please ensure that you have the required access permissions and necessary credentials to use Bunnyshell and connect to the provided GitHub repositories.
* For security reasons, make sure to properly manage and protect sensitive information, such as the MongoDB URI.