/**
 * 登录相关路由
 */

import * as Router from "koa-router";
import { User } from "../controller";
const router = new Router();

// router
//   .get("/define","",User.DefindUser);
router
  .get("findUser", "/test", User.findUser);  
router
  .get("CreatUser","/create",User.CreatUser);

export default router;