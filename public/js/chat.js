console.log('If you are seeing this message, the chat.js has been included successfully.')

var current_id = document.getElementById('current-id');
var current_username = document.getElementById('current-username');

const url = 'http://localhost:3001';
var socket_id;
var socket = io(url);
socket.on('connect', ()=> {
    socket_id = socket.id;
    current_id.innerText = socket_id;
})
console.log(socket_id)