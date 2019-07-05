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


// Setting the username
btn_name.addEventListener('click', ()=>{
    let previousName = name;
    let name_entered = name_input.value;
    console.log(name_entered)
    if (name_entered.length > 0) {
        name = name_entered;
        name_input.value = '';
    }

    

    // Emit the new name
    socket.emit('name-change', {
        previousName,
        newName: name,
        id: socket_id
    })
})


// Emitting messages
btn_message.addEventListener('click', ()=> {
    let message = message_input.value;

    if (message.length > 0) {
        let data = {
            message: message,
            timestamp: new Date().toISOString(),
            name: name,
            id: socket.id
        }
    
        socket.emit('chat-message', data)
    } 
    message_input.value = '';
})


// Auto 
function adjustScrollHeight (object) {
    object.scrollTop = object.scrollHeight;
}

function returnTimestamp () {
    let date = Date().toLocaleString()
    let split = date.split(' (');
    let final = split[0];
    return final
}