export interface signupInterface {
    fname:string,
    lname:string,
    email: string,
    password: string,
    profileImage?:string,
    doctorType:string,
    gender?:string,
    phoneNo?:string,
}

export interface loginInterface {
    email:string,
    password:string
}