# Studio Repro

Website for Studio Repro built using React, Typescript, MobX, Ant Design, and Webpack.

## Getting Started

This project uses yarn:

```
yarn install
```

Once the dependencies have been installed you can issue the `npm start` command.

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in development mode.
It will automatically run the app using Electron and supports HMR (Hot Module Reloading).

`npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Docker

This project includes a multi-stage Dockerfile.

Build the image:

```
docker build . --tag react-studio-repro:1.0
```

Build and run the image:

```
docker-compose up --build
```

and then navigate to: http://localhost:8080/

## Contribution guidelines

Never commit directly to master, create a feature branch and submit a pull request.
