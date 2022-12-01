# Demo Links: #  
- PART 1: https://www.loom.com/share/3c84005c4e77469da0eb1a5cc82f7635
- PART 2: https://www.loom.com/share/f9ff2794b9b04fac998c56fa1a6e0771

### Recommended NodeJS Version v16.15.0 ###

## Backend SDK Setup ##
- ## For NodeJS SDK ##
- - Open the cloned directory in the terminal.
- - Change the directory (cd) into NODEJS-SDK
- - Run the command npm install
- - Create the SDK build using command npm run build
- ## Running NodeJS SDK test ## 
- - Change the directory to nodesdk-test
- - Link SDK to test app by running the command npm link ../NODEJS-SDK
- - Run the tsc  in order to convert the ts to js for running the app using node command.
- - Start the NodeJS server by running the command node dist/app.js
- - Web Server will be started on port 8081 and will start listening for the message. You can paste the ws url (ws://localhost:8081) in https://www.piesocket.com/websocket-tester and test the connection with the Websocket server.
- - All the sent/received messages will be logged in a log.txt file.

## Fronend SDK Setup ##
- ### For Browser SDK ###
- - Change the directory (cd) in terminal to Browser-SDK 
- - Run the command npm install
- - Create the build using command npm run build
- ### Running Browser SDK test ###
- - Change the directory (cd) to In browsersdk-test
- - Run command npm install to install the dependencies as this is a ReactJS app for testing the SDK.
- - Run the command npm link ../Browser-SDK, in order to link the test app with the SDK.
- - Start the test app by running the command npm start
- - This will start our frontend test app where users can send and receive messages.
- - All the sent/received messages will be listed on UI as a list.