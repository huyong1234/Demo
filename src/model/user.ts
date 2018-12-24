import { Sequelize, Model, DataTypes, IntegerDataType } from 'sequelize';
import Models from './sequelizeBridge';

export class User extends Model{
    
    // 查找所有用户信息
    public static async findUsers(): Promise<Array<User> | null> {
        const result = await User.findAll();
        return result;
    }
    // 修改用户信息
    public static async UpdateUsers(params): Promise<User | null> {
        // 获取参数
        const result = await User.update(params, {
            where: { id: params.id}
        });
        return result;
    }
    // 新增一条用户信息
    public static async CreateUsers(params): Promise< User | null> {
        const result = await User.create(params);
        return result;
    }
    // 删除一个用户
    public static async DeletedUsers(id): Promise<User | null> {
        const result = await User.destroy({
            where: id
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
