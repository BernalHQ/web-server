
const fs = require("fs")
const { parentPort } = require("worker_threads")


parentPort.on("message", (url) => {
    let result = {};

    fs.readFile('index.html', function (err, html) {
        if (err) {
            throw err; 
        }  
        console.log(url)     
        if (url != null && url == "/" || url == "/index.html" ) {
            result = {
                status: 200,
                contentType: "text/html",
                content: html
            }
        } else {
            result = {
                status: 400,
                contentType: "text/plain",
                content: "Sorry!!!"
            }
        }
    });
    parentPort.postMessage(result)
})

