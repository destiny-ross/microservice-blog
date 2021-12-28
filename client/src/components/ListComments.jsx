import { useEffect, useState } from "react";
import axios from "axios";

const ListComments = ({ postId }) => {
  const [comments, setComments] = useState({});

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  const renderedComments = Object.values(comments).map((comment) => {
    return (
      <li style={{ listStyle: "none" }} key={comment.id}>
        {comment.content}
      </li>
    );
  });
  return (
    <div>
      <h3>Comments</h3>
      <div
        style={{ marginBottom: "10px" }}
        className="d-flex flex-column flex-wrap just-content-between"
      >
        {renderedComments}
      </div>
    </div>
  );
};

export default ListComments;
