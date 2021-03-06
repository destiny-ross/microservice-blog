import { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

const ListPosts = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get("http://test-blog.com/posts");
    setPosts(res.data);
  };

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body d-flex flex-column justify-content-start">
          <h3>{post.title}</h3>
          <hr />
          <ListComments comments={post.comments} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2>Posts</h2>
      <div className="d-flex flex-row flex-wrap justify-content-start">
        {renderedPosts}
      </div>
    </div>
  );
};

export default ListPosts;
