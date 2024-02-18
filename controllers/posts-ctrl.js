import PostsService from '../service/posts-service.js';

class PostsController {
  async create(req, res) {
    try {
      const post = await PostsService.create(req.body);
      res.redirect('/posts/list');
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostsService.getAll();
      res.render('posts/list', {
        posts: posts,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      await PostsService.delete(req.params.id);
      res.redirect('/posts/list');
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new PostsController();
