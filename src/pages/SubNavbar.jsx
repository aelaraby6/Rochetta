import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
   <div style={{marginBottom:"70px"}}>
     <nav style={{backgroundColor:"#e7e7e7ff"}} className="py-2 mt-1 w-100 position-fixed z-3 p-3 ">
      <div className="container d-flex justify-content-around flex-wrap">
        <Link to="/category/pain-relief" className="text-decoration-none text-dark px-2">Pain Relief</Link>
        <Link to="/category/cold-and-flu" className="text-decoration-none text-dark px-2">Cold and Flu</Link>
        <Link to="/category/diabetes-care" className="text-decoration-none text-dark px-2">Diabetes Care</Link>
        <Link to="/category/first-aid" className="text-decoration-none text-dark px-2">First Aid</Link>
        <Link to="/category/skin-care" className="text-decoration-none text-dark px-2">Skin Care</Link>
        <Link to="/category/child-and-baby-care" className="text-decoration-none text-dark px-2">Child & Baby Care</Link>
      </div>
    </nav>
   </div>
  );
};

export default SubNavbar;
