import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import PostsRouter from './routes/posts-router.js';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URI;

mongoose.connection
  .on('connected', () => {
    console.log('Connected to Database');
  })
  .on('error', () => {
    console.log('Database Error');
  });

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/posts', PostsRouter);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running... on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
