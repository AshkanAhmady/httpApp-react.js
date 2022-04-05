import { useEffect, useState } from "react";
import Comment from "../../Component/Comment/Comment";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import styles from "./Discussion.module.css";
import { toast } from "react-toastify";
import {
  getAllCommentsWithAxios,
  deleteCommentWithAxios,
  AddCommentsWithAxios,
} from "../../../Services/APIFetchFunctions";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [error, setError] = useState(false);

  // get data from db
  useEffect(() => {
    // روش اول
    // http
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => setComments(response.data.slice(0, 4)))
    //   .catch((error) => console.log(error));

    // روش دوم
    const getComments = async () => {
      try {
        const response = await getAllCommentsWithAxios();
        setComments(response.data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  // show comment in fullComment Component
  const selectCommentHandler = (id) => {
    setCommentId(id);
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

      const { data } = await getAllCommentsWithAxios();
      setComments(data);
      toast.success("Your comment has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  // delete comment
  // way: 1
  const deleteHandler = () => {
    deleteCommentWithAxios(commentId)
      .then(() => getAllCommentsWithAxios())
      .then((respons) => {
        setComments(respons.data);
        toast.success("your comment deleted");
      })
      .catch((error) => console.log(error));
    setCommentId(null);
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

  // show comments
  const renderComments = () => {
    let renderValue = <p>loading ...</p>;

    if (error) {
      renderValue = "";
      toast.error("Fetching data get error !");
    }

    if (comments && !error) {
      renderValue = comments.map((comment) => {
        return (
          <Comment
            onClick={() => selectCommentHandler(comment.id)}
            key={comment.id}
            name={comment.name}
            email={comment.email}
          />
        );
      });
    }

    return renderValue;
  };

  return (
    <main>
      <section
        className={
          comments != null && comments.length > 0 ? styles.commentSBox : ""
        }
      >
        {renderComments()}
      </section>
      <section>
        <FullComment
          comments={comments}
          deleteHandler={deleteHandler}
          commentId={commentId}
        />
      </section>
      <section>
        <NewComment postCommentHandler={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
