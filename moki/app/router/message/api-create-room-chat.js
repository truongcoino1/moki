var Room = require('./Room');
var sendFunction = require('../push-notification/functions/send-message');
var profile = require('../model/profile');
var device = require('../push-notification/models/device');
module.exports = function(socket,io){
    socket.on('JoinRoom', function(roomID,id_user1, ad_user2,id_product){          
         Room.find({roomID : roomID},(err, rs)=>{
             if(rs.length >0){
                 socket.room = roomID;
                 socket.join(socket.room);
                 io.to(roomID).emit('updatechat', rs[0].listChat);
             } else{
                 let newRoom = new Room();
                 newRoom.roomID = roomID;
                 newRoom.listChat=[];
                 newRoom.listUser=[];
                 newRoom.listUser.push(id_user1);
                 newRoom.listUser.push(id_user2);
                 newRoom.id_product = id_product;
                 newRoom.save(function (err, room) {
                    if(err){
                      console.log(err);
                    }
                  });
                  profile.find({id_user : id_user1},(e1, r1)=>{
                    if(r1.length >0){
                        r1[0].list_chat.push(roomID);
                    }
                  });
                  profile.find({id_user : id_user2},(e1, r1)=>{
                    if(r1.length >0){
                        r1[0].list_chat.push(roomID);
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
    socket.on('sendchat', function (data, roomID,ad_user2) {
        // we tell the client to execute 'updatechat' with 2 parameters
        
        Room.find({roomID : roomID},(err, rs)=>{
            if(rs.length >0){
                if(rs[0].listChat.length == 0){
                    device.find({id_user : ad_user2},(e,r)=>{
                        if(r.length >0){
                            let message ={
                                roomID : roomID,
                                message:"Có người vừa gửi cho bạn một tin nhắn. \n Bạn có muốn xem?",
                              }
                            sendFunction.sendMessage(message ,r[0].registrationId,function(result){                  
                            });
                        }
                    })
                }
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