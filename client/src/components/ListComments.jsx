import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return (
      <li style={{ listStyle: "none", margin: 0 }} key={comment.id}>
        {comment.content}
      </li>
    );
  });

  return (
    <ul
      className="d-flex flex-column justify-content-start"
      style={{ padding: "0 0 0 0" }}
    >
      {renderedComments}
    </ul>
  );
};

export default CommentList;
