import * as Router from "koa-router";
import * as compose from "koa-compose";

import User from "./user";

// const routers = new Router().use(User.routes(), Company.routes(), Result.routes(), _debugRouter.routes());
const routers = new Router().use(User.routes());
export default compose([routers.routes(), routers.allowedMethods()]);
export { User, routers };