const express = require('express');
const path = require('path');
const app = express();
const socket = require('socket.io');

// App
app.use(express.static('public'))


// Routes
app.get('/', (request, response) => {
    response.sendfile(path.join(__dirname, 'public/index.html'))
})


// Listen on 3001
const server = app.listen(3001, ()=>console.log('Listening to requests on port 3001'))

// Listens for client connections
const io = socket(server);