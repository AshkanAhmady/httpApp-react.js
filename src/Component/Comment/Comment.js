import styles from "./Comment.module.css";

const Comment = ({ name, email, onClick }) => {
  return (
    <div className={styles.comment} onClick={onClick}>
      <span>
        <h2>name:</h2> {name}
      </span>
      <span>
        <h2>email:</h2> {email}
      </span>
    </div>
  );
};

export default Comment;
