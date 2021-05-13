import { Socket, Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
) => {
  const joinRoom = (roomId: string) => {
    socket.join(roomId);
  };

  const leaveRoom = (roomId: string) => {
    socket.leave(roomId);
  };

  socket.on('room:join', joinRoom);
  socket.on('room:leave', leaveRoom);
};
