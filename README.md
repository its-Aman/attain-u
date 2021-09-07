### Tech Stack

- [NestJS](https://nestjs.com/), A NodeJS based framework, for Back-end
- [JWT](https://jwt.io/)
- [Passport](http://www.passportjs.org/)
- [MongoDB](https://www.mongodb.com/) A NOSQL Database
- [Mongoose](https://mongoosejs.com/) ODM


### How to Run

#### With Docker
- `docker-compose.yml` file is used to bundle the environment.
- Run the project by running the following commands.
- `docker-compose up -d`
- The server app will run at 'localhost:3000'.
- The Mongo server will be up on 27017 port.
- Navigate to the app by visiting [http://localhost:3000/api/v1/](http://localhost:3000/api/v1/) in your browser.
- There you'll see the Hi message.
- Now start playing with the app as you wish.

#### Without Docker
- Please make sure you've mongodb installed locally and is listening on port 27017
- Please make sure you've node installed
- run `npm install`. This will install all the dependencies
- run `npm run build && npm run start:prod`. This will create a dist folder and run the server on port 3000.
- Navigate to the app by visiting [http://localhost:3000/api/v1/](http://localhost:3000/api/v1/) in your browser.
- There you'll see the Hi message.
- Now start playing with the app as you wish.


### Technique

#### Server
- The Authentication is built on JWT, Passport.
- JWT is the modern standard of the modern web, it also helps to bundle user information and pass it between client and server.
- The server is based on NestJS, and the implementation of JWT is to build on top of Passport. Passport also gives many [strategy](http://www.passportjs.org/packages/) for authentication.
- The APIs are supporting Versioning. So we can release new versions after adding new features.
- You'll find all the api's in the [Postman Collection](https://raw.githubusercontent.com/its-Aman/attain-u/master/AttainU.postman_collection.json)
- `/api/v1/auth/login` request is `POST`. Pass the body as 

  ```
  {
      "credentials": {
          "username": "admin", // username can be anything. 
          "password": "password", // password can be anything.
          "role": "admin" // role other then admin will consider as the non-admin and will not be able to make CRUD operation on Post Resource.
      }
  }
  ```
- `/api/v1/posts/` request is `GET`. Get request to fetch all the posts.
- `/api/v1/posts/` request is `POST`. Post request to create a new Post. Pass the content in the body of the request as

  ```
  { 
    "content": "this is a first post"
  }
  ```
- `/api/v1/posts/:id` request is `PUT`. PUT call to update the existing post. `:id` parameter is the _id UUID of the post.
- `/api/v1/posts/:id` request is `DELETE`. DELETE call to delete the existing post. `:id` parameter is the _id UUID of the post.


#### Database
- The Post schema is simple and have `createdBy` and `content` field.
- The Database name is `workflow`, and the collection is `Posts`
- Here again, I'm leveraging the NestJS framework. The mongoose ODM provides the wrapper functions hence I don't need to run the script to create a new collection or new DB itself.