import { Sequelize, Model, DataTypes, IntegerDataType } from 'sequelize';
import Models from './sequelizeBridge';

export class User extends Model{
    
    // 查找所有用户信息
    public static async findUsers(): Promise<Array<User> | null> {
        const result = await User.findAll();
        return result;
    }
    // 新增一条用户信息
    public static async CreateUsers(): Promise< User | null> {
        const result = await User.create({
            "id":1,
            "name":"胡勇",
            "account":"huyong",
            "password":"123"
        });
        return result;
    }
    // public id?: string;
    // public name?: string;
    // public account?: string;
    // public password?: string;
    // public deletedAt?: string;
}
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, 
                unique: true,
                primaryKey: true,
                comment: "ID",
            },
            name: {
                type: DataTypes.STRING,
                comment: "姓名",
            },
            account: {
                type: DataTypes.STRING,
                comment: "账号",
            },
            password: {
                type: DataTypes.STRING,
                comment: "密码",
            },
            deletedAt:{
                type: DataTypes.DATE,
                comment: "是否删除",
                allowNull:true
            }
        },
        {
            tableName: "user",
            timestamps: false, //don't add the timestamp attributes (updatedAt, createdAt)
            charset: 'utf8',
            paranoid: true,
            comment: "用户信息",
            sequelize: Models,
        }
    )
