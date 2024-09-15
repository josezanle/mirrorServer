// server.js
const io = require('socket.io')(8080);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('offer', (offer) => {
        socket.broadcast.emit('offer', offer);
    });

    socket.on('answer', (answer) => {
        socket.broadcast.emit('answer', answer);
    });

    socket.on('candidate', (candidate) => {
        socket.broadcast.emit('candidate', candidate);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    
});

console.log('Servidor de señalización escuchando en el puerto 8080');
