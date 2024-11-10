import { truncate } from "fs";
import sequelize from "../config/dbconnect";
import { Model, DataTypes } from "sequelize";
import Doctor from "./DoctorModel";

class Address extends Model{
    public addressTitle!: string;
    public officePhoneNo!: string;
    public faxNumber?:string;
    public street! : string;
    public state!: string;
    public city!:string;
    public country!:string;
    public zipCode!: number;
    public doctorId!:string;
}

Address.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    addressTitle:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    officePhoneNo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    faxNumber:{
        type:DataTypes.STRING,
        allowNull:true
    },
    street:{
        type:DataTypes.STRING,
        allowNull:false        
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    zipCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    doctorId:{
        type:DataTypes.NUMBER,
        allowNull:false,
        references:{
            model:Doctor,
            key:"id"
        },
        onDelete:'CASCADE',
        onUpdate:"CASCADE"
        
    }
},{
    sequelize,
    tableName:"addresses"
})

export default  Address;
