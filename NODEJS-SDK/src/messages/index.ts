import { WebSocketServer } from "ws";
import fs from "fs";

export class MessagesClass {
    serverConnection() {
        const port = 8081
        const wss = new WebSocketServer({ port })

        wss.on('connection', (ws) => {
            ws.send(`Connection Established!`)
            ws.on('message', (data) => {
                this.writeToFile(`RECV: ${data}\n`)

                //Whenever a message is received, sending a message automaticaly to implement the send feature
                const messageToSend = `Current time is ${Date.now()}`
                ws.send(`${messageToSend}\n`)
                this.writeToFile(`SEND: ${messageToSend}\n`)
            })
        });
        
        console.log(`Listening at ${port}...`);
    }
    writeToFile(data) {
        fs.appendFile('log.txt', `${data}\n`, ()=>{
            console.log("WRITE IN FILE")
        })   
    }
}