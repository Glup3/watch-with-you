import { Socket, Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
) => {
  const disconnectedRooms = new Map<string, string[]>();

  const joinRoom = (roomId: string) => {
    socket.join(roomId);
    sendUserList([roomId]);
  };

  const leaveRoom = (roomId: string) => {
    socket.leave(roomId);
    sendUserList([roomId]);
  };

  const sendUserList = (roomIds: string[]) => {
    for (const roomId of roomIds) {
      const room = io.of('/').adapter.rooms.get(roomId);

      if (room != undefined) {
        io.to(roomId).emit('room:userList', [...room.keys()]);
      }
    }
  };

  const disconnect = () => {
    const rooms = disconnectedRooms.get(socket.id);

    if (rooms != undefined) {
      sendUserList(rooms);
      disconnectedRooms.delete(socket.id);
    }
  };

  const disconnecting = () => {
    disconnectedRooms.set(socket.id, [...socket.rooms]);
  };

  socket.on('room:join', joinRoom);
  socket.on('room:leave', leaveRoom);
  socket.on('disconnect', disconnect);
  socket.on('disconnecting', disconnecting);
};
