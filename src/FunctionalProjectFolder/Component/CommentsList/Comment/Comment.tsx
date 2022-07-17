import { CommentProps } from "../../../../Interfaces";
import styles from "./Comment.module.css";

const Comment:React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <span>
        <h2>name:</h2> {comment.name}
      </span>
      <span>
        <h2>email:</h2> {comment.email}
      </span>
    </div>
  );
};

export default Comment;
