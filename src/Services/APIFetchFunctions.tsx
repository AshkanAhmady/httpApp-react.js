import { CommentInterface } from "../Interfaces";
import http from "./HttpServices";

// new comment
export function AddCommentsWithAxios(data: CommentInterface) {
  return http.post("/comments", data);
}

// delete comment
export function deleteCommentWithAxios(commentId: number) {
  return http.delete(`/comments/${commentId}`);
}

// get all comments
export function getAllCommentsWithAxios() {
  return http.get("/comments");
}

// get single comment
export function getSingleCommentsWithAxios(commentId: number) {
  return http.get(`/comments/${commentId}`);
}
