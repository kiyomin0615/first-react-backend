# Project Overview
A simple API built by Express.js and MongoDB
- Front End: React.js
  - [Front](https://github.com/kiyomin0615/first-react)
- Back End(API): Express.js
- Back End(DB): MongoDB


# Getting Started
## Prerequisites
- Node.js
- MongoDB

## Installation and Setup
1. Clone the repository  
```git clone <repository-url>```

2. Navigate to the project directory  
```cd <project-directory>```

3. Install dependencies  
```npm install```

4. Setup MongoDB  
- Run MongoDB on "localhost:27017"
- Create collections(tables) of "posts"

5. Start the local server  
```npm run start```

6. Access the website running on local server  
```http://localhost:8080```

# Features
1. GET /posts
- Retrieves all posts
- Response: Returns an array of all posts  

2. GET /posts/:id
- Fetches detailed data for a specific post by post id
- Parameters: id - The unique identifier of the post
- Response: Returns the detailed data of the specified post  

3. POST /posts
- Adds a new post to the database
- Request Body: title, content - post data
- Response: Returns the newly created post  

4. TODO
- Edit posts
- Delete posts
- Sort posts by newest or oldeset
