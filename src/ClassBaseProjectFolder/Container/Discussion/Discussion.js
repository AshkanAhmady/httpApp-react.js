import { Component } from "react";
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

class Discussion extends Component {
  state = { comments: null, commentId: null, error: false };

  // get data from db
  componentDidMount() {
    const getComments = async () => {
      try {
        const response = await getAllCommentsWithAxios();
        this.setState({ comments: response.data });
      } catch (error) {
        this.setState({ error: true });
      }
    };
    getComments();
  }

  selectCommentHandler = (id) => {
    this.setState({ commentId: id });
  };

  postCommentHandler = async (comment) => {
    try {
      await AddCommentsWithAxios({
        ...comment,
        postId: 1,
      });

      const { data } = await getAllCommentsWithAxios();
      this.setState({ comments: data });
      toast.success("Your comment has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  deleteHandler = () => {
    deleteCommentWithAxios(this.state.commentId)
      .then(() => getAllCommentsWithAxios())
      .then((respons) => {
        this.setState({ comments: respons.data });
        toast.success("your comment deleted");
      })
      .catch((error) => console.log(error));
    this.setState({ commentId: null });
  };

  render() {
    // show comments
    const renderComments = () => {
      let renderValue = <p>loading ...</p>;

      if (this.state.error) {
        renderValue = "";
        toast.error("Fetching data get error !");
      }

      if (this.state.comments && !this.state.error) {
        renderValue = this.state.comments.map((comment) => {
          return (
            <Comment
              onClick={() => this.selectCommentHandler(comment.id)}
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
            this.state.comments != null && this.state.comments.length > 0
              ? styles.commentSBox
              : ""
          }
        >
          {renderComments()}
        </section>
        <section>
          <FullComment
            comments={this.state.comments}
            deleteHandler={this.deleteHandler}
            commentId={this.state.commentId}
          />
        </section>
        <section>
          <NewComment postCommentHandler={this.postCommentHandler} />
        </section>
      </main>
    );
  }
}

export default Discussion;
