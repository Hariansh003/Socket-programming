const net = require("net");
const server = net.createServer((socket) => {
  console.log("client connected");
  socket.on("data", (data) => {
    console.log("Recieved data from the client ", data.toString());
  });
  socket.write("Hello from the server side");
});
server.listen(5051, () => {
  console.log("server is up on 5051");
});
