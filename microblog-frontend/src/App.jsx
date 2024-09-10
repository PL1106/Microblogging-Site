import React, { useState } from 'react';
import Header from './components/header';
import Comment from './components/Comment';
import Section from './components/Section';
import './style/header.css';
import './style/post-button.css';
import './style/comment.css';
import './style/section.css'

function App() {
  const [comments, setComments] = useState([]);

  const handlePostComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Comment onPost={handlePostComment} />
      </div>
      <div style={{ padding: '20px' }}>
        <Section comments={comments} />
      </div>
    </div>
  );
}

export default App;
