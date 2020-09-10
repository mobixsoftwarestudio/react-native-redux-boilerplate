# React Native Redux Boilerplate

> Compilation of our best practices in software development using React Native.

### Setup

#### JSON SERVER

> NOTE: Use `yarn` for install.
> NOTE: If you want to user `yarn start` for some other reason, you'll need to review it inside `package.json`. Otherwise the lib won't work as expected.

This library creates a mock API where you insert your JSON data with no need of server instances. At this point, you'll be up to implement your code considering some minimum API integration.

Type `yarn start` and check `http://localhost:3000`

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

For more information around json-server configuration, click [here](https://github.com/typicode/json-server 'Json-Server Github Page').

Our `api.json`:

```
{
    "feature1": [
        { "id": 1, "title": "Some Title", "description": "Some Description" },
        { "id": 2, "title": "Some Title", "description": "Some Description" },
        { "id": 3, "title": "Some Title", "description": "Some Description" },
        { "id": 4, "title": "Some Title", "description": "Some Description" }
    ],
    "feature2": [
        { "id": 1, "title": "Some Title", "description": "Some Description" }
    ],
    "feature3": { "id": 1, "title": "Some Title", "description": "Some Description" }
}
```

#### Deploy

This project has integration to Heroku, thus everytime there's a PR approved into `master` branch, it will automatically deploy an instance of json-server.

In case you'll use it as reference, set up a Heroku app instance and integrate into your new repository. Deploy your version here:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mobixsoftwarestudio/react-native-redux-boilerplate.git)

Also we have an integration with `Bitrise`, setting up our build to send them through `Appetize.io`.



#### Folder Structure

```
├──src
|	└── assets
|	|	└── images
|	└── app
|	|	└── AppContainer.tsx
|	|	└── index.tsx
|	|	└── routes.ts
|	└── core
|	|	└── components
|	└── utils
|	|	└── requests.ts
|	└── modules
|	|	└── moduleName
|	|	|	└── routes.ts
|	|	|	└── components
|	|	|	└── screens
|	|	|	|	|	└── actions.ts
|	|	|	|	|	└── types.ts
|	|	|	|	|	└── interfaces.ts
|	|	|	|	|	└── reducer.ts
|	|	|	|	|	└── saga.ts
|	|	|	|	|	└── routes.ts
|	|	|	|	└── screen
|	|	|	|	|	└── index.tsx
|	|	|	|	|	|	├── jsx
|	|	|	|	|	|	└── styles
|	└── services
|	|	└── interceptors
|	|	|	└── request.ts
|	|	|	└── response.ts
|	|	└── api.ts
|	└── store
|	|	└── index.ts
|	|	└── redux.ts
|	|	└── sagas.ts
|	└── styles
|	|	└── index.ts
|	|	└── colors.ts
|	|	└── metrics.ts
└── .env
```

#### Features

#### Development Guideline

### Tests

The simplest way to run the JavaScript test suite is by using the following command at the root of your React Native checkout:

```
yarn test
```

or to check live for any changes and test them later that you can perform:

```
yarn run watch-mode
```

This will run tests using [Jest](https://jestjs.io/) ![](https://api.iconify.design/logos-jest.svg?height=16)

> NOTE: Tests can be found inside `__test__` folder. You can find all files that are being tested.

### Writing tests

Whenever you are fixing a bug or adding new functionality to React Native, it is a good idea to add a test that covers it.

## Setup

### Reactotron

And see the documentation [here](https://github.com/infinitered/reactotron/blob/master/readme.md)

You can install the lastest release on this [link](https://github.com/infinitered/reactotron/releases)

### Navigation

> IMPORTANT: Now, we are using `react-navigation` v4, as soon as v5 is released, we will need to remove lib `react-navigation-hooks`.

> NOTE OF LIB: react-navigation v5 is already on its way and is a full rewrite (including hooks). This project will not live past v4, and will try to make the migration path from v4 to v5 easy by not introducing any new hook that won't be in v5.

```
import { useNavigation, useNavigationParam, ... } from 'react-navigation-hooks';
```

## Detox

To run ios tests:

```
yarn test:e2e:build:debug:ios
```

You can specify which file you want to test separately:

```
yarn test:e2e:build:debug:ios ./e2e/__tests__/<FILE>
```
