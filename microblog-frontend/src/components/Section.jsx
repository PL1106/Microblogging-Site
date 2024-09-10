import '../style/section.css'; 

const Section = ({ comments }) => {
  return (
    <div className="section">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>{comment}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Section;
