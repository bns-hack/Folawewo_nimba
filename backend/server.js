const http = require("http");
const app = require('./app')

const PORT = 80

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}...`)
})