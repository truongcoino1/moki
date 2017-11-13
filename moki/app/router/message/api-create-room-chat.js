module.exports = function(app){
    var  http = require('http');
    var server = http.createServer(app);
    var io = require('socket.io').listen(server);
    
    app.get('/chat', function (req, res) {
        res.sendfile(__dirname + '/index.html');
      });

    var usernames = {};
    
    // rooms which are currently available in chat
    var rooms = ['a'];
   
    io.sockets.on('connection', function (socket) {
        console.log("aaa");
        socket.on('addRoom', function(room){
            // store the username in the socket session for this client
            socket.room = room;    
            console.log(room);       
            rooms.push(room);
            
        });
        // when the client emits 'adduser', this listens and executes
        socket.on('adduser', function(username){
            // store the username in the socket session for this client
            console.log("aaa");
            socket.username = username;
            // store the room name in the socket session for this client
           
            // add the client's username to the global list
            usernames[username] = username;
            // send client to room 1
            socket.join(socket.room);
            // echo to client they've connected
            socket.emit('updatechat', 'SERVER', 'you have connected to' + socket.room);
            // echo to room 1 that a person has connected to their room
            socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', username + ' has connected to this room');
            socket.emit('updaterooms', rooms, socket.room);
        });
        
        // when the client emits 'sendchat', this listens and executes
        socket.on('sendchat', function (data) {
            // we tell the client to execute 'updatechat' with 2 parameters
            io.sockets.in(socket.room).emit('updatechat', socket.username, data);
        });
        
        socket.on('switchRoom', function(newroom){
            socket.leave(socket.room);
            socket.join(newroom);
            socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
            // sent message to OLD room
            socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
            // update socket session room title
            socket.room = newroom;
            socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
            socket.emit('updaterooms', rooms, newroom);
        });
        
    
        // when the user disconnects.. perform this
        socket.on('disconnect', function(){
            // remove the username from global usernames list
            delete usernames[socket.username];
            // update list of users in chat, client-side
            io.sockets.emit('updateusers', usernames);
            // echo globally that this client has left
            socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
            socket.leave(socket.room);
        });
    });
    
}