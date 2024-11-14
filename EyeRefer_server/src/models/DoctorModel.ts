import sequelize from "../config/dbconnect";
import { Model, DataTypes } from "sequelize";
import Address from "./Address";
import ReferralPatient from "./Patient";

class Doctor  extends Model {
    public id!:number;
    public fname!:string;
    public lname!:string;
    public doctorType!: "OD" |  "MD";
    public email! : string;
    public active!:boolean;
    public password!:string;
    public gender?: "Male"|  "Female" | "Other";
    public phoneNo?:string;
    public profileImage?:string;
}

Doctor.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    fname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lname:{
        type:DataTypes.STRING,
        allowNull:true,

    },
    doctorType:{
        type:DataTypes.ENUM,
        values: ["OD", "MD"],
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phoneNo:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    gender:{
        type:DataTypes.ENUM,
        values:["Male","Female","Other"],
        allowNull:true,
    },
    profileImage:{
        type:DataTypes.STRING,
        allowNull:true
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    sequelize,
    tableName:"doctors"
})

Doctor.hasOne(Address, {
    foreignKey: 'doctorId',
    as: 'address',
  });

Doctor.hasMany(ReferralPatient,{
    foreignKey:"doctorId",
    as: "Patients"
})
// Address.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'additionalDetail',
//   });

export default Doctor;
