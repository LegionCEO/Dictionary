import Word from "../models/wordModel.js";
import mongoose from "mongoose";
import Dictionary from "../models/dictionaryModel.js";

const toId = mongoose.Types.ObjectId

export const createWord = async (req, res) => {
    try {
        const {WordName, Trans, Translation, isLearned} = req.body;

        const newWord = new Word({
            WordName, Trans, Translation, isLearned
        })

        newWord.save()

        res.status(200).json(newWord)
    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}

export const giveWordOLD = async (req, res) => {
    try {
        req.params.dicId = toId(req.params.dicId)
        req.params.wordId = toId(req.params.wordId)

        const wordToAdd = await Word.findById(req.params.wordId)
        const dicToTake = await Dictionary.findById(req.params.dicId)

        wordToAdd.Dictionary = req.params.dicId
        wordToAdd.save()

        dicToTake.Words.push(req.params.wordId)
        dicToTake.save()

    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}


export const giveWord = async (req, res) => {
    try {
        const wordToAdd = await Dictionary.findById(req.params.dicId)
        const {WordName, Trans, Translation, isLearned} = req.body

        wordToAdd.Words.push(req.body)
        wordToAdd.save()

        res.status(201).json(wordToAdd)
    }catch (error){
        console.log(error)
        res.status(400).json({message: "Something went wrong..."})
    }
}