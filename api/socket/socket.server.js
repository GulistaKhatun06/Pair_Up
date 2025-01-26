import {Server} from "socket.io"

let io;

const connctedUsers = new Map();

export const initializeSocket = (httpServer) =>{
    io = new Server(httpServer,{
        cors:{
            origin:process.env.CLIENT_URL,
            credentials:true
        }

    })
    io.use((socket,next)=>{
        const userId = socket.handshake.auth.userId;
        if(!userId) return next(new Error("Invalid user Id"));

        socket.userId = userId;
        next();
    })

    io.on("connection" ,(socket) =>{

        console.log(`User connected with socket id :${socket.id}`)
        connctedUsers.set(socket.userId , socket.id);

        socket.on("disconnect",()=>{
            console.log(`User disconnected with socket id: ${socket.id}`);
            connctedUsers.delete(socket.userId);
        })
    })

}


export const getIO = () =>{
    if(!io){
        throw new error ('Socket.io not initialized')
    }
    return io
}

export const getConnectedUsers =() =>  connctedUsers;
   
