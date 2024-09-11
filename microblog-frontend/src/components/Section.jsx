import React from 'react';
import '../style/section.css';

const Section = ({ comments, onDelete }) => {
  return (
    <div className="section">
      <h2>Comment Section</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>
              <strong>{comment.name}:</strong> {comment.text}
            </p>
            <span className="timestamp">{comment.time}</span>
            <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
};

export default Section;
