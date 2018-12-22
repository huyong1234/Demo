import * as Koa from 'koa';
import * as http from "http";
import Chalk from "chalk";
import * as net from "net";
import { Models } from "./server/model";
import Router from "./server/router";

(async () => {
    const app = new Koa();
    console.log(process.env.SERVER_NAME);
    app.use(Router);
    await Models.sync({ force: false });
    // start server
    const server = http.createServer(app.callback());
    server.listen(3000, (err: Error) => {
        if (<any>err) throw err;
        const addr = <net.AddressInfo>server.address();
        console.log(Chalk.green(`[Nestsoft] Server bound at ${addr.address} ${addr.port}`));
    });
})();