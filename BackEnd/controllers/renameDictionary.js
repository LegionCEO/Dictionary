import Dictionary from "../models/dictionaryModel.js";
import mongoose from "mongoose";

const toId = mongoose.Types.ObjectId

export const renameDictionary = async (req, res) => {
    try {
        req.params.dicId = toId(req.params.dicId)
        const dicData = await Dictionary.findById(req.params.dicId)
        if(dicData){
            Object.assign(dicData, req.body)
            await dicData.save()
            res.status(200).json(dicData)
        }
    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}
