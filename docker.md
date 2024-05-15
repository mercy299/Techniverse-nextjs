# Deploying a Next.js Application with Docker

This guide will walk you through deploying a Next.js application using Docker, allowing you to containerize your application for easy deployment and scalability.

## Prerequisites

Before you begin, ensure you have the following:

- A Next.js application ready for deployment.
- Docker installed on your local machine or deployment server.
- Basic knowledge of Docker and Next.js.

## Step 1: Dockerfile

Create a Dockerfile in the root directory of your Next.js application. This file will define the Docker image for your application.

## Step 2: Build the Docker Image

In the terminal, navigate to the root directory of your Next.js application and run the following command to build the Docker image:

```
docker build -t my-nextjs-app .
```

Replace my-nextjs-app with your desired image name.

## Step 3: Run the Docker Container

Once the image is built, you can run a container based on that image:   

```
docker run -d -p 3000:3000 my-nextjs-app
```

This command runs the container in detached mode (-d) and maps port 3000 of the container to port 3000 of the host.

N/B: You can expose the port in the dockerfile or in the command like you see up here. 