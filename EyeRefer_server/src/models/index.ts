
import fs from "fs"
import path from "path";

const basename = "index.ts"

interface DB{
    [key:string]:any
}

var db:DB = {};

fs.readdirSync(__dirname)
.filter(file =>{
    return(
        file.indexOf(".") !== 0 && file !==  basename && file.endsWith(".ts")
    )
})
.forEach(file => {
    const model = import(path.join(__dirname,file));
    db[file.slice(0,-3)] = model;
})


export default  db;
