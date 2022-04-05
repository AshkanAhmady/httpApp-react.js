import { Component } from "react";
import styles from "./NewComment.module.css";

class NewComment extends Component {
  state = {
    comment: {
      name: "",
      email: "",
      body: "",
    },
  };

  changeHandler = (e) => {
    this.setState({
      comment: { ...this.state.comment, [e.target.name]: e.target.value },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.postCommentHandler(this.state.comment);

    this.setState({
      comment: {
        name: "",
        email: "",
        body: "",
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className={styles.newComment}>
        <div>
          <input
            required
            value={this.state.comment.name}
            onChange={this.changeHandler}
            name="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div>
          <input
            required
            value={this.state.comment.email}
            onChange={this.changeHandler}
            name="email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div>
          <textarea
            required
            value={this.state.comment.body}
            onChange={this.changeHandler}
            name="body"
            placeholder="Body"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewComment;
