import { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4001/posts/${postId}/comments");
    setContent("");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="form-control">Comment</label>
          <input
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            type="text"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
