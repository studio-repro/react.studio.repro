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

This project includes a multi-stage Dockerfile, to build an image you can execute: `docker build . --tag react-studio-repro:1.0`

## gRPC & Protocol Buffers

This project uses gRPC and Protocol Buffers.

**Protoc Binary**

Download and install the compiler: https://github.com/protocolbuffers/protobuf/releases

```
$ mv ~/Downloads/protoc-3.6.1-osx-x86_64 ~/Tools
$ cd ~/Tools
$ ln -s protoc-3.6.1-osx-x86_64 protoc
```

Add the binary to your path, e.g. `export PATH=$PATH:$HOME/Tools/protoc/bin`

**gRPC Web Protoc Plugin**

Use this plugin to generate the proto messages and the service client stub from .proto definitions

Download and install the `protoc-gen-grpc-web` plugin: https://github.com/grpc/grpc-web/releases

```
$ sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.3-darwin-x86_64 /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web
```

When you have both protoc and protoc-gen-grpc-web installed, make sure they are both executable and are discoverable from your PATH.

Run the following command to generate the proto messages and the service client stub from .proto definitions:

```bash
$ ./proto-web-gen.sh
```

## Contribution guidelines

Code reviews are done via pull requests.
