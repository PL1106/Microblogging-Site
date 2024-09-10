const db = require('../database');

exports.createPost = (req, res) => {
  const { title, content, author } = req.body;
  const query = `INSERT INTO posts (title, content, author) VALUES (?, ?, ?)`;

  db.run(query, [title, content, author], function (err) {
    if (err) {
      res.status(400).json({ message: 'Error creating post', error: err.message });
    } else {
      res.status(201).json({ id: this.lastID, title, content, author });
    }
  });
};

// Get all posts
exports.getAllPosts = (req, res) => {
  const query = `SELECT * FROM posts`;

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching posts', error: err.message });
    } else {
      res.json(rows);
    }
  });
};

exports.getPostById = (req, res) => {
  const query = `SELECT * FROM posts WHERE id = ?`;

  db.get(query, [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching post', error: err.message });
    } else if (!row) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(row);
    }
  });
};


exports.updatePostById = (req, res) => {
  const { title, content, author } = req.body;
  const query = `UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?`;

  db.run(query, [title, content, author, req.params.id], function (err) {
    if (err) {
      res.status(400).json({ message: 'Error updating post', error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json({ id: req.params.id, title, content, author });
    }
  });
};


exports.deletePostById = (req, res) => {
  const query = `DELETE FROM posts WHERE id = ?`;

  db.run(query, [req.params.id], function (err) {
    if (err) {
      res.status(500).json({ message: 'Error deleting post', error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json({ message: 'Post deleted successfully' });
    }
  });
};
