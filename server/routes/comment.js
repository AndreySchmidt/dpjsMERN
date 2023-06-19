import { Router } from "express";
import { checkAuth } from "../utils/checkAuth";

const router = new Router();

// Create comment /api/comments/:id
router.post("/:id", checkAuth, createComment);
