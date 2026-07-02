import express from "express"

import { registerUser, login, refreshToken } from "../Controller/AuthController.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", login)
router.post("/refresh", refreshToken)

export default router;
