type config = {
    elementId: string;
    connectionUrl: string;
};
export declare class Messages {
    WSCObject: any;
    DomElement: any;
    constructor(config: config);
    sendMassage(message: string): void;
}
export {};
