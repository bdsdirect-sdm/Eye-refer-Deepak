import bcrypt from "bcrypt"

export const hassedPassword = async (password:string) =>{
    const hashedPassword :string = await bcrypt.hash(password,10);
    return hashedPassword;
}
