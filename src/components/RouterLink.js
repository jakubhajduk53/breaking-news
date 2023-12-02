import { Link } from "react-router-dom";

function RouterLink({ name, href }) {
  return (
    <Link to={href} className="hover:text-linen/90">
      {name}
    </Link>
  );
}

export default RouterLink;
