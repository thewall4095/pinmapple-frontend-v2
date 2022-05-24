import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <p className="not-found-text">It looks like this page doesn't exist</p>
      <Link to={"/"}>
      </Link>
    </div>
  );
};

export default NotFound;
