import sequelize from "../config/dbconnect";
import { Model, DataTypes } from "sequelize";

class Otp extends Model{
    public id! :  number;
    public email!: string;
    public otp !:string;
    public createdAt!:string;
}

Otp.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    otp:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    sequelize,
    tableName:"otps",
    modelName:"Otp",
    timestamps:true    
})


export default Otp;