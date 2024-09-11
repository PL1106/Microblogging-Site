// models/postModel.js
import db from '../database.js';

export const getAllPosts = (callback) => {
  db.all('SELECT * FROM posts', [], (err, rows) => {
    callback(err, rows);
  });
};

export const getPostById = (id, callback) => {
  db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
    callback(err, row);
  });
};

export const createPost = (post, callback) => {
  const { title, content, author } = post;
  db.run(
    'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
    [title, content, author],
    function (err) {
      callback(err, this.lastID); 
    }
  );
};

export const updatePost = (id, post, callback) => {
  const { title, content, author } = post;
  db.run(
    'UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?',
    [title, content, author, id],
    function (err) {
      callback(err, this.changes); 
    }
  );
};

export const deletePost = (id, callback) => {
  db.run('DELETE FROM posts WHERE id = ?', [id], function (err) {
    callback(err, this.changes); 
  });
};
