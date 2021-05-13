import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import registerRoomHandlers from './events/roomHandler';

const PORT = process.env.PORT || 3010;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Connected: ', socket.id);

  registerRoomHandlers(io, socket);
});

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
