const net = require("net");
const client = net.createConnection({ port: 5051 }, () => {
  console.log("connection established");
  client.write("Hello from the client");
});
client.on("data", (data) => {
  console.log("recieved data from the serever", data.toString());
});
