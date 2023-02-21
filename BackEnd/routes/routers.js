import {Router} from "express";
import {createUser} from "../controllers/createUser.js";
import {createDictionary, giveDictionaryToUser} from "../controllers/createDictionary.js";
import {createWord, giveWord} from "../controllers/createWord.js";
import {renameDictionary} from "../controllers/renameDictionary.js";
import {changeWord} from "../controllers/changeWord.js";
import {getUserDictionaries} from "../controllers/getUserDictionaries.js";
import {getDictionary} from "../controllers/getDictionary.js";
import {wordValidator} from "../Validation/wordValidator.js";

const router = Router()

// Create User
router.post("/create_user", createUser)

// Create Dictionary for user
router.post("/create_dic", createDictionary)
router.get("/give_dic/:userId/:dicId", giveDictionaryToUser)

// Get All User's Dictionaries
router.get("/get_user_dics/:userId", getUserDictionaries)

// Get Dictionary data
router.get("/get_dicdata/:dicId", getDictionary)

// Rename Dictionary for user
router.patch("/rename_dic/:dicId", renameDictionary)

// Create Word for Dictionary
router.post("/create_word", createWord)
router.route("/give_word/:dicId").post(wordValidator, giveWord)

// Edit Word
router.patch("/edit_word/:wordId", changeWord)

export default router