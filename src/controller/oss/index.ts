import * as OSS from "@nestsoft/oss";
import Config from "../../config";
import { Middleware } from "@nestsoft/koa-extended";

export const UpdateFile: Middleware =  async (ctx) => {
    const file = ctx.request.file;
    await OSS.upload(Config.get("resourceOSS"), 'test', file, { acl: "public-read" });
};