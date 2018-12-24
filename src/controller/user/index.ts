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
    const params = ctx.request.body;
    const result = await User.CreateUsers(params);
    ctx.body = {code: 0, data: result, msg: "ok"};
};

export const UpdateUser:Middleware =  async (ctx) => {
    console.log("修改");
    // 获取参数
    const params = ctx.request.body;
    const result = await User.UpdateUsers(params);
    ctx.body = {code: 0, data: result, msg: "ok"};
};

export const DeletedUser:Middleware =  async (ctx) => {
    console.log("删除");
    const id = ctx.request.query;
    const result = await User.DeletedUsers(id);
    ctx.body = {code: 0, data: result, msg: "ok"};
};
   
    
    
