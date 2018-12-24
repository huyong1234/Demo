/**
 * 文件上传相关路由
 */

import * as Router from "koa-router";
import { OSS } from "../controller";
import * as bodyParser from "koa-bodyparser";
const router = new Router();

router
  .use(bodyParser({
    extendTypes: {
        json: ["application/json"],
    },
    jsonLimit: "100kb",
  }))
  .post("UpdateFile", "/update", OSS.UpdateFile)

export default router;