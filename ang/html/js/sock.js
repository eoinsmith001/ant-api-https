var socket = io.connect('https://localhost:4000');

socket.on('news', function (data) {
  console.log(data);
  socket.emit('event', { my: 'data' });
});
