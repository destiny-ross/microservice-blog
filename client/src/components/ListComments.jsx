const CommentList = ({ comments }) => {
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
