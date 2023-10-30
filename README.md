## Setup for local development
Instructions to set up and run the application locally. Include any prerequisites, dependencies, and steps for running the project.

1. **Prerequisites**: Ensure you have Node.js and npm installed.

2. **Clone the Repository**:
   ```bash
   https://github.com/pavanh007/book-shelf.git
   ```
   
Install dependencies with:

```bash
  npm install
```

and then to start with:

```
npm start
```


To learn more about the capabilities of `book-shelf-node` project, please refer to its [GitHub repository](https://github.com/pavanh007/book-shelf).


## Table of Contents

- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)

## API Endpoints

 - [http://localhost:3000](#api-endpoints) : localhost URL

Provide an overview of the API endpoints and how to use them. You can use tables or lists to present this information.

| Endpoint               | Method | Description       |
|------------------------|--------|-------------------|
| `/v1/book/add-book`       | POST   | add the book      |
| `/v1/book/books`       | GET    | get list of books | 
| `/v1/book/book-details/:bookId`   | GET    | get book by Id    |
| `/v1/book/delete-book/:bookId`   | DELETE | delete book by Id |
| `/v1/book/update-book/:bookId`   | PUT    | update book by Id |

You can provide detailed information about each endpoint, request and response formats requirement.

HERE I attached the POSTMAN API collection:   [API collection](#https://github.com/pavanh007/book-shelf/blob/main/bookShelf.postman_collection.json) to run in local environment. 

