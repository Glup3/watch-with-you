import { Socket, Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
) => {
  const play = () => {
    socket.to([...socket.rooms]).emit('player:onPlay');
  };

  const pause = () => {
    socket.to([...socket.rooms]).emit('player:onPause');
  };

  socket.on('player:play', play);
  socket.on('player:pause', pause);
};
