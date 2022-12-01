"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodejs_sdk_1 = __importDefault(require("nodejs-sdk"));
const client = new nodejs_sdk_1.default;
client.serverConnection();
