import { Link } from "react-router-dom";
import "./SubNavbar.css";

const SubNavbar = () => {
  return (
    <div className="subnavbar">
      <nav className="subnavbar-nav">
        <div className="links-container">
          <Link to="/category/pain-relief" className="link-box">
            Pain Relief
          </Link>
          <Link to="/category/cold-and-flu" className="link-box">
            Cold and Flu
          </Link>
          <Link to="/category/diabetes-care" className="link-box">
            Diabetes Care
          </Link>
          <Link to="/category/first-aid" className="link-box">
            First Aid
          </Link>
        </div>
        <div className="shipping-box">Free Shipping Order By August</div>
      </nav>
    </div>
  );
};

export default SubNavbar;
