import Word from "../models/wordModel.js";
import mongoose from "mongoose";

const toId = mongoose.Types.ObjectId

export const changeWord = async (req, res) => {
    try {
        req.params.wordId = toId(req.params.wordId)
        const wordData = await Word.findById(req.params.wordId)
        if (wordData) {
            Object.assign(wordData, req.body)
            await wordData.save()
            res.status(200).json(wordData)
        }
    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}