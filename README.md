# MerchStore Microservices Project

## Overview

This project is a demonstration of a MerchStore application built using microservices architecture, Docker containers, and Docker Compose for orchestration. The MerchStore project is designed to showcase how a typical e-commerce platform can be structured using microservices. Each microservice is responsible for a specific functionality of the application, such as product catalog, user management, cart management, and order processing.

## Technologies Used

- Microservices Framework: Node.js with Express
- Database: MongoDB
- Containerization: Docker
- Orchestration: Docker Compose
- Frontend: React.js
- API Gateway: NGINX
- Authentication: JWT Tokens
- Container Registry: Docker Hub

### Prerequisites

Before running the application, ensure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)


### Installation

1. Clone the repository:

- git clone https://github.com/omarkhaleddd/Merch-Store-Dockerized/

2. Navigate to the project directory:
- cd Merch-Store-Dockerized

3. Build the Docker containers:
- docker-compose build

4. Start the Docker containers:
- docker-compose up
Access the application in your browser at http://localhost:3000

### Docker Compose
The docker-compose.yml file defines the services and configurations for running the MerchStore application. It includes services for each microservice, databases, frontend, API gateway, and more.

### Contributing
We welcome contributions to improve and expand the functionality of the MerchStore project. If you'd like to contribute, please fork the repository and submit a pull request with your changes.
