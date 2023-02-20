import Dictionary from "../models/dictionaryModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

const toId = mongoose.Types.ObjectId
export const createDictionary = async (req, res) => {
    try {
        const {DictionaryName, Words, UserOwner} = req.body

        const newDictionary = new Dictionary({
            DictionaryName, Words, UserOwner
        })

        newDictionary.save()

        res.status(200).json(newDictionary)
    }catch (error){
        console.log(error)
        res.status(400).json({message:"Something went wrong"})
    }
}

export const giveDictionaryToUser = async (req, res) => {
    try {
        req.params.dicId = toId(req.params.dicId)
        req.params.userId = toId(req.params.userId)

        const toUser = await User.findById(req.params.userId)
        const dictionaryToAdd = await Dictionary.findById(req.params.dicId)

        //dictionaryToAdd.UserOwner.push(req.params.userId)
        dictionaryToAdd.UserOwner = req.params.userId
        dictionaryToAdd.save()
        toUser.Dictionaries.push(req.params.dicId)
        //toUser.Dictionaries = req.params.dicId
        toUser.save()

        res.json(toUser)
    }catch (error){
        console.log(error)
        res.status(400).json({message:"Something went wrong"})
    }
}

