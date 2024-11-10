import React from "react";
import { Formik , Field, ErrorMessage,Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { signUpValidationSchema } from "../validations/signValidation";
import IconBtn from "../components/common/IconBtn";
import { signupInterface } from "../interfaces/iconButtonInterface";
import { apiConnector } from "../services/apiConnector";
import { toast } from "react-toastify";

const SingUp:React.FC = () => {
    const baseUrl = import.meta.env.VITE_API_URL
    console.log("baseUrl", baseUrl)
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

    return (
        <div className=" text-center">
            <div className=" text-textColor font-bold text-3xl mb-8">Sign Up</div>
            <div className=" border-2 p-6 rounded-md bg-white ">
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
            onSubmit={ async(values: signupInterface) => {
                console.log(values);
                await mutate(values);

            }}
        >
            {( ) => (
            <Form>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-1 text-start">
                    <label htmlFor="fname">First Name</label>
                    <Field type="text" name="fname" placeholder="First Name" />
                    <ErrorMessage name="fname" component="div" />
                    </div>

                    <div>
                    <label htmlFor="lname">Last Name</label>
                    <Field type="text" name="lname" placeholder="Last Name" />
                    <ErrorMessage name="lname" component="div" />
                    </div>
            </div>

                <div>
                <label htmlFor="doctorType">Doctor Type</label>
                <Field as="select" name="doctorType">
                    <option value="" className=" text-slate-500">Select</option>
                    <option value="OD">OD</option>
                    <option value="MD">MD</option>
                </Field>
                <ErrorMessage name="doctorType" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="text" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <Field type="text" name="confirmpassword" placeholder="Confirm Password" />
                    <ErrorMessage name="confirmpassword" component="div" />
                </div>

                <div className=" ">
                    <IconBtn text="Sign Up"
                        type="submit"
                        customClasses="w-full bg-teritory text-white"
                        onClick={() =>{console.log("Clicked")}}
                        />
                </div>

                <div>
                Already an existing user? 
                <button type="button" className=" text-teritory">
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
