import express from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController.js'; // Adjust the path as necessary

const router = express.Router();

// Define routes with corresponding handlers
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
