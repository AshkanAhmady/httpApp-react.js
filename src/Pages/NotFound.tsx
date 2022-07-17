import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <h5>404</h5>
      <h2>Page Not Found</h2>
      <Link to="/">go to home page</Link>
    </div>
  );
};

export default NotFound;
