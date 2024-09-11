import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Comment from './components/Comment';
import Section from './components/Section';
import './style/header.css';
import './style/post-button.css';
import './style/comment.css';
import './style/section.css';

function App() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);


  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {
      setComments(storedComments);
      setFilteredComments(storedComments);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handlePost = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setFilteredComments(updatedComments);
  };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    setFilteredComments(updatedComments);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredComments(comments); 
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = comments.filter(
      (comment) =>
        comment.text.toLowerCase().includes(term) || comment.name.toLowerCase().includes(term)
    );
    setFilteredComments(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Comment onPost={handlePost} />
      </div>
      <Section comments={filteredComments} onDelete={handleDelete} />
    </div>
  );
}

export default App;
