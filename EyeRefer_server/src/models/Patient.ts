
import sequelize from "../config/dbconnect";
import { Model,  DataTypes } from "sequelize";

class Patient extends Model{
    public DOB!: Date;
    public email!:string;
    public phoneNo!:string;
    public fname!:string;
    public lname?:string;
    public gender!:"Male"|"Female"|"Other";
    public diseaseName! :string;
    public laterality!: "Left"|"Right"|"Both";
    public patientReturn!:boolean;
    public timing! : string;
    public referTo!: number;
    public referAdress!:string;
    public insuranceCompany!:string;
    public insurancePlan!:string;
    public documentation! : string;
    public notes!:string;
    public doctorId!:number;
}

Patient.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    DOB:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    phoneNo:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    fname:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    lname:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    gender:{
        type:DataTypes.ENUM("Male","Female","Other"),
        allowNull:true
    },
    diseaseName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    laterality:{
        type:DataTypes.STRING,
        allowNull:false
    },
    patientReturn:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    timing:{
        type:DataTypes.ENUM("Routine","Urgent","Emergent"),
        allowNull:true
    },
    referTo:{
        type:DataTypes.NUMBER,
        allowNull:false,
    },
    referAdress:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    insuranceCompany:{
        type:DataTypes.STRING,
        allowNull:false
    },
    insurancePlan:{
        type:DataTypes.STRING,
        allowNull:false
    },
    documentation:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    notes:{
        type:DataTypes.STRING,
        allowNull:true
    },
    doctorId:{
        type:DataTypes.INTEGER,
        references:{
            model:"doctors",
            key:"id"
        },
        onDelete:"CASCADE",
    }

},
{
    sequelize,
    tableName:"Patients",
    modelName:"Patient"
})

export default Patient;
