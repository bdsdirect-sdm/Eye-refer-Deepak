import * as Yup from "yup"

export const signUpValidationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    doctortype: Yup.string().required("Doctor type is required"),
    password: Yup.string().required("Password is required").min(8,"Password must be atlest 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });