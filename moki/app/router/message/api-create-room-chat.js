var Room = require('./Room');


module.exports = function(socket,io){
    socket.on('JoinRoom', function(roomID ){          
         Room.find({roomID : roomID},(err, rs)=>{
             if(rs.length >0){
                 socket.room = roomID;
                 socket.join(socket.room);
                 io.to(roomID).emit('updatechat', rs[0].listChat);
             } else{
                 let newRoom = new Room();
                 newRoom.roomID = roomID;
                 newRoom.listChat=[];
                 newRoom.save(function (err, room) {
                    if(err){
                      console.log(err);
                    }
                  });
                  socket.room = roomID;
                
             }
         })
      });
      socket.on('adduser', function(username, roomID){
        socket.join(socket.room);
        socket.username = username;  
        Room.find({roomID : roomID},(err, rs)=>{
            if(rs.length >0){         
              io.to(roomID).emit('updatechat', rs[0].listChat);
              
            } else{
               
            }
        })
        
    });
    socket.on('sendchat', function (data, roomID) {
        // we tell the client to execute 'updatechat' with 2 parameters
        
        Room.find({roomID : roomID},(err, rs)=>{
            if(rs.length >0){
               rs[0].listChat.push(socket.username +" : "+data);
               io.to(roomID).emit('updatechat', socket.username +" : "+data);
               rs[0].save(function (err, room) {
                if(err){
                  console.log(err);
                }
              });
            } else{
               
            }
        })
    });
      
    
}