import {Router} from "express";
import {createUser} from "../controllers/createUser.js";

const router = Router()

// Create User
router.post("/create_user", createUser)

export default router