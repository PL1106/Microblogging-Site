const PostButton = ({ onClick, label }) => {
  return (
    <button className="post-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default PostButton;