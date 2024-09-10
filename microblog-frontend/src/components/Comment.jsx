import React, { useState } from 'react';
import PostButton from './Postbutton';
import '../style/comment.css';

const Comment = ({ onPost }) => {
  const [comment, setComment] = useState('');
  const maxWords = 250;

  const handleInputChange = (e) => {
    const words = e.target.value.split(/\s+/).filter(word => word.length > 0);
    if (words.length <= maxWords) {
      setComment(e.target.value);
    } else {
      setComment(words.slice(0, maxWords).join(' '));
    }
  };

  const handlePostClick = () => {
    if (comment.trim()) {
      const timestamp = new Date().toLocaleTimeString(); 
      onPost({ text: comment, time: timestamp });
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <textarea
        value={comment}
        onChange={handleInputChange}
        placeholder="Type your comment here..."
        className="comment-box"
      />
      <p className="word-count">{comment.split(/\s+/).filter(word => word.length > 0).length}/{maxWords} words</p>
      <PostButton onClick={handlePostClick} label="Post" />
    </div>
  );
};

export default Comment;
