import { useState } from "react";
import styles from "./NewComment.module.css";

const NewComment = ({ postCommentHandler }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postCommentHandler(comment);
  };

  return (
    <form onSubmit={submitHandler} className={styles.newComment}>
      <div>
        <input
          onChange={changeHandler}
          name="name"
          placeholder="Name"
          type="text"
        />
      </div>
      <div>
        <input
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          type="email"
        />
      </div>
      <div>
        <textarea
          onChange={changeHandler}
          name="body"
          placeholder="Body"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewComment;
