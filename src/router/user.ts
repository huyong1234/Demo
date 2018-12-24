/**
 * 用户相关路由
 */

import * as Router from "koa-router";
import { User } from "../controller";
import * as bodyParser from "koa-bodyparser";
const router = new Router();

// router
//   .get("/define","",User.DefindUser);
router
  .use(bodyParser({
    extendTypes: {
        json: ["application/json"],
    },
    jsonLimit: "100kb",
  }))
  .get("findUser", "/test", User.findUser)
  .post("CreatUser","/create",User.CreatUser)
  .put("UpdateUser","update",User.UpdateUser)
  .delete("DeletedUser","delete",User.DeletedUser)

export default router;