import { Link } from "react-router-dom";

function RouterLink({ name, href }) {
  return <Link to={href}>{name}</Link>;
}

export default RouterLink;
