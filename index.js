const http = require("http")
const fs = require("fs/promises")
const port = 80

const getHtml = async () => {
    const html = await fs.readFile("index.html");
    return html
}


http.createServer(async (request, response) => {  
    let html = await getHtml();
    if (request.url != null && request.url == "/" || request.url == "/index.html" ) {
        response.writeHead(200,
            {"Content-Type" : "text/html"})
        response.end(html); 
    } else {
        response.writeHead(400,
            {"Content-Type" : "text/plain"})
        response.end("Sorry!!!");  
    }

}).listen(port, () => {
    console.log("Server is running on port " + port)
});



