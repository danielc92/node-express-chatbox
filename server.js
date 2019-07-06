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

// Handle incoming signals and emit
io.on('connection', (socket) => {

    io.sockets.emit('system', { name: 'System', id :socket.id})

    socket.on('chat-message', (data) => {
        io.sockets.emit('chat-message', data)
    })

    socket.on('name-change', (data) => {
        io.sockets.emit('name-change', data)
    })
})