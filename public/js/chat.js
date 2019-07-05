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


// Grab elements
var btn_message = document.getElementById('send-message');
var btn_name = document.getElementById('set-name');
var message_input = document.getElementById('input-message');
var name_input = document.getElementById('input-name');
var chatbox = document.getElementById('chatbox');
var system = document.getElementById('system-panel');
var name = "Anonymous";

function renderUser() {
    current_id.innerText = socket_id;
    current_username.innerText = name;
}

renderUser();