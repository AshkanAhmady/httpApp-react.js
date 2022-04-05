import styles from "./FullComment.module.css";
import { getSingleCommentsWithAxios } from "../../../Services/APIFetchFunctions";
import { Component } from "react";

class FullComment extends Component {
  state = { comment: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.commentId !== this.props.commentId) {
      if (this.props.commentId) {
        getSingleCommentsWithAxios(this.props.commentId)
          .then((response) => this.setState({ comment: response.data }))
          .catch((error) => console.log(error));
      } else {
        this.setState({ comment: null });
      }
    }
  }

  render() {
    let { comments, comment, commentId, deleteHandler } = this.props;

    const inline = {
      backgroundColor: "#eee",
      color: "#134e4a",
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
      userSelect: "none",
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
      if (this.state.comment)
        commentDetail = (
          <div className={styles.comment}>
            <div>
              <div>
                name: <span>{this.state.comment.name}</span>
              </div>
              <div>
                email: <span>{this.state.comment.email}</span>
              </div>
              <div>
                body: <span>{this.state.comment.body}</span>
              </div>
            </div>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        );

      return commentDetail;
    };

    return <div>{renderFullComment()}</div>;
  }
}

export default FullComment;
