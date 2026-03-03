import React, { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onPost }) => {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    if (!comment.trim()) return;
    onPost(comment);
    setComment("");
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        placeholder="Write a comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CommentBox;