/**
 * 引用配置文件，实现数据库连接
 */
import { Sequelize } from "sequelize";
import Config from "../config";

// const dbInfo = JSON.stringify(Config.get("DB"));
const Models = new Sequelize(Config.get("DB"));
export default Models;

