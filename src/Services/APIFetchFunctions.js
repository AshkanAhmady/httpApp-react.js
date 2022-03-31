import http from "./HttpServices";

// new comment
export function AddCommentsWithAxios(data) {
  return http.post("/comments", data);
}

// delete comment
export function deleteCommentWithAxios(commentId) {
  return http.delete(`/comments/${commentId}`);
}

// get all comments
export function getAllCommentsWithAxios() {
  return http.get("/comments");
}

// get single comment
export function getSingleCommentsWithAxios(commentId) {
  return http.get(`/comments/${commentId}`);
}
