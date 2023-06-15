import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost } from "../controllers/posts.js";

const router = new Router();

// Create Post /api/posts
router.post("/", checkAuth, createPost);

export default router;
