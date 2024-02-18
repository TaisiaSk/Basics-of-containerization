import Post from './model.js';

class Service {
  async create(post) {
    const newPost = await Post.create(post);
    console.log(`Create new post with text: ${post.text}`);
    return newPost;
  }

  async getAll() {
    const posts = await Post.find();
    console.log(`Get ${posts.length} posts`);
    return posts;
  }

  async delete(id) {
    if (!id) {
      throw new Error('id not specified');
    }
    const post = await Post.findByIdAndDelete(id);
    console.log(`Delete post with text: ${post.text}`);
    return post;
  }
}

export default new Service();
