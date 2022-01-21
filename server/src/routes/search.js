import express from "express";
import auth from "../middleware/auth.js";
import { searchUsers } from "../controllers/search.js";

const router = express.Router();

router.post("/users", auth, searchUsers);

export default router;
