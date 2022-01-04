import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";

const App = () => {
  return (
    <div className="container">
      <h1>My Test Blog</h1>
      <CreatePost />
      <hr />
      <ListPosts />
    </div>
  );
};

export default App;
