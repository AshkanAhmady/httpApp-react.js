import { useState } from "react";
import styles from "./NewComment.module.css";
import { AddCommentsWithAxios } from "../../Services/APIFetchFunctions";
import { toast } from "react-toastify";

const NewComment = ({ history }) => {
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

    setComment({
      name: "",
      email: "",
      body: "",
    });
  };

  // create Comment
  // way: 1
  // const postCommentHandler = (comment) => {
  //   http
  //     .post("/comments", {
  //       ...comment,
  //       postId: 1,
  //     })
  //     .then(() => http.get("/comments"))
  //     .then((respons) => {
  //       setComments(respons.data);
  //       toast.success("Your comment has been submitted");
  //     })
  //     .catch((error) => console.log(error));
  // };
  // way: 2
  const postCommentHandler = async (comment) => {
    try {
      await AddCommentsWithAxios({
        ...comment,
        postId: 1,
      });
      history.push("/");
      toast.success("Your comment has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.newComment}>
      <div>
        <input
          required
          value={comment.name}
          onChange={changeHandler}
          name="name"
          placeholder="Name"
          type="text"
        />
      </div>
      <div>
        <input
          required
          value={comment.email}
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          type="email"
        />
      </div>
      <div>
        <textarea
          required
          value={comment.body}
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
