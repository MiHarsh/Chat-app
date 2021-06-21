/*jshint esversion: 6 */

const express = require('express');
const app = express();
const socketio = require('socket.io')

app.use(express.static(__dirname + '/'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);
io.on('connection',(socket)=>{
    socket.emit('messageFromServer',{data:"Welcome to the socketio server"});
    socket.on('newMessageToServer',(msg)=>{
        // console.log(msg)
        io.emit('messageToClients',{text:msg.text, id:msg.id});
    })
})