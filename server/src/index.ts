import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3010;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Connected: ', socket.id);

  socket.on('message', function (message: string) {
    console.log(message);
  });
});

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
