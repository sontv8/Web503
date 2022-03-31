import express from "express";
import { signin, signup } from "../controllers/auth";
<<<<<<< HEAD
const router = express.Router();
=======
const router = express.Router()
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81

router.post('/signup',signup)
router.post('/signin',signin)

export default router