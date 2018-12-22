import * as Koa from "koa";
import { User } from "../../model/index";
import { Middleware } from "@nestsoft/koa-extended";

// export const DefindUser:Middleware =  async (ctx) => {
//     const result = await User.DefineUser();
//     ctx.body = {code: 0, data: result, msg: "ok"};
// };

export const findUser:Middleware =  async (ctx) => {
    console.log("查找");
    const result = await User.findUsers();
    ctx.body = {code: 0, data: result, msg: "ok"};
};

export const CreatUser:Middleware =  async (ctx) => {
    console.log("创建");
    const result = await User.CreateUsers();
    ctx.body = {code: 0, data: result, msg: "ok"};
};
   
    
    
