import styles from "./Comment.module.css";
import { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className={styles.comment} onClick={this.props.onClick}>
        <span>
          <h2>name:</h2> {this.props.name}
        </span>
        <span>
          <h2>email:</h2> {this.props.email}
        </span>
      </div>
    );
  }
}

export default Comment;
