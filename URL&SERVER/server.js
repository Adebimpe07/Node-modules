const http = require("http");
const getnames = require("./name.js");

const PORT = 8081;

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log("Server successfully connected to database");
// });

const server = http.createServer((req, res) => {
    getnames(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});