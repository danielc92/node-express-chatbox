# Chat App
Building a real-time chat application using Nodejs, Express.js and socket.io

- Users can enter the chat.
- Users can change their name.
- Users can send and receive messages in real-time from other users.
- Chats are not currently being persisted to a database or log file.

# Before you get started
Refresh on the following things;
- HTML5/CSS
- socket.io
- Express.js web framework
- Javascript (ES6)
- Node

# Setup

**Installing Depencendies**

Dependencies and versions are listed in the package.json "dependencies" key, and can be installed via the following command from root:

```sh
npm install
```

**Installation of nodemon**

This project uses nodemon for hot reloading
I installed it globally using:

```sh
npm install nodemon -g
```

**Installation of Node**

This project requires `nodejs` to run.

**Starting the dev server**

`nodemon` will auto reload the server upon file changes.

```sh
nodemon server.js
```

# Tests
- Tested bidirectional messaging successfully

# Contributors
- Daniel Corcoran

# Sources
- [Express Documentation](https://expressjs.com/)