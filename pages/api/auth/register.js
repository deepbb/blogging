var bcrypt = require('bcryptjs');
import dbConnect from "../../../utils";
import User from "../../../models/User"

export default async function handler(req,res) {
    const {method} = req

    await dbConnect()

    if(method === "POST") {
        try {
            // const salt = await bcrypt.genSalt(10)
            const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        const user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        }) 
        res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        try{
            const user = await User.findOne({username:req.body.username})
        ! user && res.status(400).json("Wrong user  credentials")

        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("Your password is not matching")
        res.status(200).json(user)
        } catch(err){
            res.status(500).json(err)
        }
    }

}

