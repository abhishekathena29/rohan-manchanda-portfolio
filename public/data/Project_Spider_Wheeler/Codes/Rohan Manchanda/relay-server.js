const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.get("/", (req, res) => {
  res.send("Socket.IO Relay Server Running");
});

io.on("connection", (socket) => {
  console.log("🟢 New client:", socket.id);

  // Message from ESP
  socket.on("fromESP", (msg) => {
    console.log("📨 ESP says:", msg);
    io.emit("fromESP", msg);  // relay to browser
  });

  // Message from browser
  socket.on("toESP", (msg) => {
    console.log("📩 Browser says:", msg);
    io.emit("toESP", msg);  // relay to ESP
  });

  socket.on("disconnect", () => {
    console.log("🔴 Disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("🚀 Relay Server on http://localhost:3000");
});
