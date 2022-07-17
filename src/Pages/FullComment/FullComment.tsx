import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
import {
  getSingleCommentsWithAxios,
  deleteCommentWithAxios,
} from "../../Services/APIFetchFunctions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CommentInterface } from "../../Interfaces";

const FullComment:React.FC<any> = ({ match, history }) => {
  const commentId = match.params.id;

  const [comment, setComment] = useState<CommentInterface | null>(null);

  useEffect(() => {
    if (commentId) {
      getSingleCommentsWithAxios(commentId)
        .then((response) => setComment(response.data))
        .catch((error) => console.log(error));
    } else {
      setComment(null);
    }
  }, [commentId]);

  // delete comment
  // way: 1
  const deleteHandler = () => {
    deleteCommentWithAxios(commentId)
      .then(() => {
        setComment(null);
        history.push("/");
        toast.success("your comment deleted");
      })
      .catch((error) => console.log(error));
  };
  // way: 2
  // const deleteHandler = async () => {
  //   try {
  //     await http.delete(`/comments/${commentId}`);
  //     const { data } = await http.get("/comments");
  //     setComments(data);
  //     // success notification
  //     toast.success("your comment deleted");
  //     // clear commentId state
  //     setCommentId(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const renderFullComment = () => {
    let commentDetail;

    // اگر روی کامنت کلیک کردیم
    // این لودینگ نمایش داده بشه تا زمانی که اطلاعات از دیتابیس گرفته شد
    if (commentId) commentDetail = <p>loading ...</p>;

    // زمانی که اطلاعات کامنت از دیتابیس گرفته شد این قسمت را نمایش بده
    if (comment)
      commentDetail = (
        <div className={styles.comment}>
          <div>
            <div>
              name: <span>{comment.name}</span>
            </div>
            <div>
              email: <span>{comment.email}</span>
            </div>
            <div>
              body: <span>{comment.body}</span>
            </div>
          </div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      );

    return commentDetail;
  };

  return (
    <div className={styles.fullCommentBox}>
      {renderFullComment()}
      <Link to="/">go to home page</Link>
    </div>
  );
};

export default FullComment;
