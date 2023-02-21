import User from "../models/userModel.js";
import Dictionary from "../models/dictionaryModel.js";
import mongoose from "mongoose";

const toId = mongoose.Types.ObjectId
export const getUserDictionaries = async (req, res) => {
    try {
        req.params.userId = toId(req.params.userId)
        const userData = await User.find({_id: req.params.userId}, {Dictionaries: 1})
        res.status(200).json(userData)
    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}
