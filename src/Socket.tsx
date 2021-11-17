import io from 'socket.io-client';

const socket=io('https://sfuit-data.herokuapp.com');
export default socket;