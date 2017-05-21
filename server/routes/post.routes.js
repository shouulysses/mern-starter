import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import passport from '../passport';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/addPost').post(passport.authenticate('jwt', {session:false}), PostController.addPost);

// Delete a Post
router.route('/deletePost').post(passport.authenticate('jwt', {session:false}), PostController.deletePost);

export default router;
