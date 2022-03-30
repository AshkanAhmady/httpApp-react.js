import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId, deleteHandler, comments }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => setComment(response.data))
        .catch((error) => console.log(error));
    } else {
      setComment(null);
    }
  }, [commentId]);

  const inline = {
    color: "#fff",
    background: "blueViolet",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };

  const renderFullComment = () => {
    // زمانی که روی کامنت کلیک نکرده ایم
    // اینو نشون بده
    let commentDetail = <p style={inline}>please select a comment</p>;

    if (comments != null && comments.length == 0)
      commentDetail = <p>No comments have been posted</p>;

    // اگر روی کامنت کلیک کردیم
    // این لودینگ نمایش داده بشه تا زمانی که اطلاعات از دیتابیس گرفته شد
    if (commentId) commentDetail = <p>loading ...</p>;

    // زمانی که اطلاعات کامنت از دیتابیس گرفته شد این قسمت را نمایش بده
    if (comment)
      commentDetail = (
        <div className={styles.comment}>
          <div>
            name: <span>{comment.name}</span>
          </div>
          <div>
            email: <span>{comment.email}</span>
          </div>
          <div>
            body: <span>{comment.body}</span>
          </div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      );

    return commentDetail;
  };

  return <div>{renderFullComment()}</div>;
};

export default FullComment;
