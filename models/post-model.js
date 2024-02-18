import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  text: { type: String, required: true },
});

export default mongoose.model('Post', Post);
