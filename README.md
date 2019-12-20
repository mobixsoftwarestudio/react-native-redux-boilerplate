# React Native Boilerplate
> Boilerplate used and maintained by Mobix Team and its partners/collaborators.

## Table of Contents

### Setup

#### JSON SERVER
> NOTE: Use `npm` to install it.
> NOTE: If you want to user `npm start` for some other reason, you'll need to review it inside `package.json`.

This library creates a mock API where you insert your JSON data with no need of server instances. At this point, you'll be up to implement your code considering some minimum API integration.

To run json server:

Locally, type `npm start` and check `http://localhost:3000`

You should see something like this: 

```
\{^_^}/ hi!

Loading ./src/server/api.json
Done

Resources
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile

Home
http://localhost:3000

Type s + enter at any time to create a snapshot of the database
Watching...
```

For more information around json-server configuration, click [here](https://github.com/typicode/json-server "Json-Server Github Page").

Our `api.json`: 
```
{
    "posts": [
        { "id": 1, "title": "json-server-1", "author": "typicode" },
        { "id": 2, "title": "json-server-2", "author": "typicode" },
        { "id": 3, "title": "json-server-3", "author": "typicode" },
        { "id": 4, "title": "json-server-4", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { 
        "name": "typicode" 
    }
}
```

This project has integration to Heroku, thus everytime there's a PR approved into `master` branch, it will automatically deploy an instance of json-server.

In case you'll use it as reference, set up a Heroku app instance and integrate into your new repository. Deploy your version here:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mobixsoftwarestudio/react-native-redux-boilerplate.git)


#### Folder Structure
#### Features
#### Development Guideline

## Setup

## Folder Structure

## Features

## Development Guideline
