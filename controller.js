import Service from './service.js';

class Controller {
  async create(req, res) {
    try {
      const post = await Service.create(req.body);
      res.redirect('/posts/list');
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Service.getAll();
      res.render('posts/list', {
        posts: posts,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      await Service.delete(req.params.id);
      res.redirect('/posts/list');
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new Controller();
