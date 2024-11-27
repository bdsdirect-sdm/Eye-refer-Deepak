import React from "react";
import { Formik ,Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { signUpValidationSchema } from "../../validations/signValidation";
import IconBtn from "../../components/common/IconBtn";
import { signupInterface } from "../../interfaces/iconButtonInterface";
import { apiConnector } from "../../services/apiConnector";
import { toast } from "react-toastify";
import InputFeild from "../../components/common/InputFeild";
import { useNavigate } from "react-router-dom";

const SingUp:React.FC = () => {
    const navigate  = useNavigate();
    // const baseUrl = import.meta.env.VITE_API_URL
    const { mutate } = useMutation({
        mutationKey: ["signup"],
        mutationFn: async (data: signupInterface) => {
            await apiConnector<signupInterface,{success:boolean}>({
                method:"post",
                url:"/singup",
                bodyData:data,
                })
        },
        onError:()=>{
            console.log("error")
        },
        onSuccess:()=>{
            toast.success("User created")
            
        }
    })

    const doctorTypeOptions = [{value:"OD",label:"OD"},{value:"MD",label:"MD"}]

    return (
        <div className=" text-center w-[100%] p-10">
            <div className=" text-textColor font-sans font-semibold text-4xl mb-8">Sign Up</div>
            <div className=" border-2 p-9 rounded-md bg-white flex flex-col gap-3 ">
            <Formik
                initialValues={{
                fname: "",
                lname: "",
                doctorType: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={async(values: signupInterface) => {
                console.log("dsdsdsdsdds")
                console.log("valuesvalues",values);
                mutate(values);
            }}
        >
            {( ) => (
            <Form>
            <div className="flex xl:flex-row flex-col gap-3">
                <InputFeild fieldName="fname" placeholder="Enter first name" isRequired={true} labelName="First name" type="text" />
                
                {/* last Name */}
                <InputFeild fieldName="lname" placeholder="Enter last name" isRequired={true} labelName="Last name" type="text"/>

                {/* <InputFeild fieldName="" placeholder="" isRequired={} labelName="" type=""/> */}
                </div>

                {/* select doctor type */}

                <InputFeild fieldName="doctorType" placeholder="Select" isRequired={true} labelName="Doctor Type" type="select" options={doctorTypeOptions}/>
                

                <InputFeild fieldName="email" placeholder="Enter email" isRequired={true} labelName="Email" type="email"/>

                {/* password */}
                <InputFeild fieldName="password" placeholder="Enter  password" isRequired={true} labelName="Password" type="password"/>

                {/* confirm password */}
                <InputFeild fieldName="confirmPassword" placeholder="Enter confirm password" isRequired={true} labelName="Confirm password" type="password"/>

                <div className=" my-2 ">
                    <IconBtn text="Sign Up"
                        type="submit"
                        customClasses="w-full bg-teritory text-white"
                        onClick={() =>{console.log("Clicked")}}
                        />
                </div>

                <div className="text-lg text-gray-500 my-2  ">
                Already an existing user? <span>{" "}</span> 
                <button type="button" className=" text-teritory font-bold   " onClick={()=>{
                    navigate("/login")
                }}>
                  Login
                </button>
                </div>
            </Form>
            )}
        </Formik>
            </div>
        </div>
    )
}

export default SingUp;
