'use strict';

import { createServer } from 'node:http';
//write a class
export default class Jonx{
    constructor(){

    } 
    start(port){
        const server = createServer((req, res) => {
            res.writeHead(200, { 'Conntent-Type': 'text/plain' });
            res.end('Hello world!\n');
        });
        server.listen(port, '127.0.0.1', () => {
            console.log(`Listening on localhost: ${port}`);
        });
    }
}
