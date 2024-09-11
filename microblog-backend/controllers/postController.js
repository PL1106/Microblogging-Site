import dbPromise from '../database.js'; // Adjust the path as necessary

export const getAllPosts = async (req, res) => {
  try {
    const db = await dbPromise;
    const posts = await db.all('SELECT * FROM posts');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const db = await dbPromise;
    const post = await db.get('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(post);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const db = await dbPromise;
    const result = await db.run('INSERT INTO posts (title, content, author) VALUES (?, ?, ?)', [title, content, author]);
    res.status(201).json({ id: result.lastID, title, content, author });
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const db = await dbPromise;
    const result = await db.run('UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?', [title, content, author, req.params.id]);
    if (result.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json({ id: req.params.id, title, content, author });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const db = await dbPromise;
    const result = await db.run('DELETE FROM posts WHERE id = ?', [req.params.id]);
    if (result.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json({ message: 'Post deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
};
