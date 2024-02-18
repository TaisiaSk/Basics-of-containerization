import Router from 'express';
import PostController from '../controllers/posts-ctrl.js';

const PostsRouter = new Router();

PostsRouter.post('/add', PostController.create);
PostsRouter.get('/list', PostController.getAll);
PostsRouter.post('/delete/:id', PostController.delete);

PostsRouter.get('/add', (req, res) => {
  res.render('posts/add');
});

export default PostsRouter;
