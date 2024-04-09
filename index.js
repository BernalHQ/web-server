const http = require("http")
const port = 3000


const server = http.createServer((req, res) => {
    res.write("Hello, mother fuckers noder users")
    res.end()
})

server.listen(port, (err) => {
    if (err) {
        console.log("Something went wrong")
    }
    console.log("Server is running on port " + port)
})