import Router from 'express';
import PostController from './controller.js';

const router = new Router();

router.post('/add', PostController.create);
router.get('/list', PostController.getAll);
router.post('/delete/:id', PostController.delete);

router.get('/add', (req, res) => {
  res.render('posts/add');
});

export default router;
