import io from 'socket.io-client';

const socket=io('http://192.168.1.108:5000');
export default socket;