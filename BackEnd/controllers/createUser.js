import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const {
            UserName,
            Dictionaries
        } = req.body

        const newUser = new User({
            UserName, Dictionaries
        })

        await newUser.save()
        res.status(200).json({message: `User '${UserName}' was created`, newUser})

    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}
