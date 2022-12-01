// import { WebSocketServer } from "ws";
import {WebsocketBuilder} from 'websocket-ts';

type config = {
    elementId: string,
    connectionUrl: string
}

export class Messages {
    public WSCObject = null;
    public DomElement = null;
    constructor(config: config) {
        this.DomElement = document.getElementById(config.elementId)
        const ws = new WebsocketBuilder(config.connectionUrl)
        .onMessage((i, ev) => {
            console.log("message", i, ev)
            const message = ev.data;
            console.log(this.DomElement);
            let currentHtml = this.DomElement.innerHTML;
            currentHtml+=`<li>RECV: ${message}</li>`;
            this.DomElement.innerHTML = currentHtml;
        })
        .build();
        this.WSCObject = ws;
    }
    
    sendMassage(message: string) {
        this.WSCObject.send(message)
        let currentHtml = this.DomElement?.innerHTML;
        currentHtml+=`<li>Send: ${message}</li>`;
        this.DomElement.innerHTML = currentHtml;
    }
}
