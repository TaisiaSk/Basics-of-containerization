# Basics-of-containerization

A simple example of containerization using Docker.

Posts manipulation application with a NodeJS backend and a MongoDB database.

---

### Setting project up (locally)

Step 0: Clone the repo

```bash
$ git clone https://github.com/TaisiaSk/Basics-of-containerization.git
```

Step 1: Install dependencies

```bash
$ npm install
```

Step 2: Create environment file (.env) at the root of the project with the following variables:

```bash
PORT=SERVER PORT
MONGODB_URI=YOUR MONGODB URI
```

Step 3: Start app

```bash
$ npm start || npm run dev
```

---

### Deploy with docker compose

Step 1: Create environment file (.env) at the root of the project with the following variables:

```bash
PORT=3000
MONGODB_URI=mongodb://mongo_db:27017/posts
```

Step 2: Deploy with docker compose

```bash
$ docker compose up
```

Or run on the background with command:

```bash
$ docker compose up -d
```

Step 3: Navigate to `http://localhost:3000` in your web browser when the app starts

Step 4: Stop and remove the containers

```bash
$ docker compose down
```
