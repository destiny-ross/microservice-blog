const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "Comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "Comment has been removed during moderation";
    }
    return (
      <li style={{ listStyle: "none", margin: 0 }} key={comment.id}>
        {content}
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
