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

  useEffect(() => {

    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  const handlePostComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Comment onPost={handlePostComment} />
      </div>
      <div>
        <Section comments={comments} onDelete={handleDeleteComment} />
      </div>
    </div>
  );
}

export default App;
