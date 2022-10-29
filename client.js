import io from 'socket.io-client';

var socket = io('http://127.0.0.1:8360/');


socket.emit('open', 'data');
console.log("send open finish")
socket.emit('addUser', 'data');


//监听事件
socket.on('addUser', function(data){
    console.log("addUser${data}"+data)
})
console.log("send adduser finish")


