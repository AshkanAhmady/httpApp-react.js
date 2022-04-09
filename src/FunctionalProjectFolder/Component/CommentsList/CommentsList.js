import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import Styles from "./CommentsList.module.css";
import { toast } from "react-toastify";
import { getAllCommentsWithAxios } from "../../../Services/APIFetchFunctions";
import { Link } from "react-router-dom";

const Discussion = () => {
  const [comments, setComments] = useState(null);
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
          <Link to={`/comment/${comment.id}`} key={comment.id}>
            <Comment name={comment.name} email={comment.email} />
          </Link>
        );
      });
    }

    return renderValue;
  };

  return <section className={Styles.comments_list}>{renderComments()}</section>;
};

export default Discussion;
