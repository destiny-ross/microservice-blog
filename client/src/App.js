import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";

const App = () => {
  return (
    <div className="container">
      <h1>My Blog</h1>
      <CreatePost />
      <hr />
      <ListPosts />
    </div>
  );
};

export default App;
