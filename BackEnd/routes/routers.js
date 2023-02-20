import {Router} from "express";
import {createUser} from "../controllers/createUser.js";
import {createDictionary, giveDictionaryToUser} from "../controllers/createDictionary.js";
import {createWord, giveWord} from "../controllers/createWord.js";

const router = Router()

// Create User
router.post("/create_user", createUser)

// Create Dictionary for user
router.post("/create_dic", createDictionary)
router.get("/give_dic/:userId/:dicId", giveDictionaryToUser)

// Create Word for Dictionary
router.post("/create_word", createWord)
router.get("/give_word/:dicId/:wordId", giveWord)

export default router