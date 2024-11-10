import sequelize from "../config/dbconnect";
import { Model, DataTypes } from "sequelize";

class Otp extends Model{
    public email!: string;
    public otp !:string;
    public createdAt!:string;
}

Otp.init({
    email:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false,
    },
    otp:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
    }
},
{
    sequelize,
    tableName:"otps",
    timestamps:true    
})