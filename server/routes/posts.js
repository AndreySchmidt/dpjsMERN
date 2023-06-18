import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
} from "../controllers/posts.js";

const router = new Router();

// Create Post /api/posts
router.post("/", checkAuth, createPost);

// Get All Posts /api/posts
router.get("/", getAll);

// Get Post By id  /api/posts/:id
router.get("/:id", getById);

// Get My Post /api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

// Remove Post /api/post/:id
router.delete("/:id", checkAuth, removePost);

// Update Post /api/post/:id
router.put("/:id", checkAuth, updatePost);

export default router;
