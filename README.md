# React Native Boilerplate
> Boilerplate used and maintained by Mobix Team and its partners/collaborators.

## Table of Contents

### Setup

#### JSON SERVER
> NOTE: Use `npm` to install it.

This library creates a mock API where you insert your JSON data with no need of server instances. At this point, you'll be up to implement your code considering some minimum API integration.

To run json server:

Inside the `server` folder, we have the `api.json` file and also the `json-server` file. The first one is your "database" with all mock JSON responses, while the other one sets up any configuration that you might need. For more information around configuration, click [here](https://github.com/typicode/json-server "Json-Server Github Page").

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

Our configuration file `json-server.json`: 

```
{ 
    "port": 3000
}
```

To execute on the project:

`json-server --watch --delay 5000 ./src/server/api.json`

**NOTE**: `--delay 5000` is used to track loading behaviour.

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

#### Folder Structure
#### Features
#### Development Guideline

## Setup

## Folder Structure

## Features

## Development Guideline
