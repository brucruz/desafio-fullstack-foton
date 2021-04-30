# Fullstack Foton Challenge

This challenge was provided by [FotonTech](https://github.com/FotonTech), as a part of its recruitment process.

## Technologies used:

#### Server

- Typescript
- GraphQL
  - Apollo Server
  - TypeGraphQL
- Express
- MongoDB
  - Mongoose
- Jest
  - Apollo Server Testing
  - MongoDB Memory Server

#### Web Client

- Typescript
- Next.JS
  - React Hooks
  - React Context API
  - Next Apollo
  - Apollo Client
  - GraphQL
- Styled Components
- React Spring
- Formik
  - Yup
- Storybook

## Getting started

### 1) Install packages and Configure server and web client

Before starting, you need to install the packages and configuring server and web client by running:

```bash
yarn startup
```

### 2) Starting server

You need to make sure [MongoDB is installed](https://docs.mongodb.com/manual/installation/), before starting the server.

You can check if there is a version installed by running:

```bash
mongod -version
```

Finally, you can start the server by running:

```bash
yarn dev:server
```

### 3) Starting web client

You can start the web client by running:

```bash
yarn dev:client
```

The server must be running in order for the data to be fetched and for the web becoming fully functional.

### 4) Running tests

You can run tests by running:

```bash
yarn test
```

### 5) Starting Storybook client

You can interact with isolated components with Storybook. To start, run:

```bash
yarn dev:storybook
```

## Challenge Instructions

For the challenge to be fulfilled, I had to comply with the following requirements:

### Design/Screens

https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/book-app?node-id=0%3A1

![screens](https://user-images.githubusercontent.com/13947203/114562602-04ac2880-9c45-11eb-8f33-cc6637c475fb.png)

### Minimum Requirements

#### Books

##### Adding a book

- [x] a user should be able to add a book
- [x] a user should not be able to add a book, if it is missing its title, author or description

##### Listing books

- [x] a user should be able to list books
- [x] a user should be able to load more books

##### Searching books

- [x] a user should be able to query books by their titles

##### Book details

- [x] a user should be able to view a book details
