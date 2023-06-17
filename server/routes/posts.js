import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost, getAll, getById } from "../controllers/posts.js";

const router = new Router();

// Create Post /api/posts
router.post("/", checkAuth, createPost);

// Get All Posts /api/posts
router.get("/", getAll);

// Get Post By id  /api/posts/:id
router.get("/:id", getById);

export default router;
