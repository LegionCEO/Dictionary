import {check, validationResult} from "express-validator";
import Dictionary from "../models/dictionaryModel.js";
import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const toId = mongoose.Types.ObjectId
export const wordValidator = [
    check('WordName')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Word can not be empty')
        .bail()
        .isLength({max: 25})
        .withMessage('Word is limited by 25 characters')
        .bail()
        /*.custom((value, {req}) => { // TO FIX LATER
            req.params.dicId = toId(req.params.dicId)
            return Dictionary.find({_id: new ObjectId("63f50e4700509c882e31113b"), Words: {$elemMatch:{WordName: value}}})
                .then(()=>{
                    return Promise.reject("Word already created")
                })
            })*/,
    check('Translation')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Translation can not be empty')
        .bail()
        .isLength({max: 25})
        .withMessage('Translation is limited by 25 characters')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        next()
    }
]
