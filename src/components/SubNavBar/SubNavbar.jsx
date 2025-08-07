import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
   <div className="subnavbar" >
     <nav style={{backgroundColor:"#ebebebff", marginTop:"13px"}} className="py-2 w-100 position-fixed z-3 p-3 d-flex justify-content-between  ">
      <div className="d-flex justify-content-around align-items-center flex-wrap ms-5 gap-2">
        <Link style={{backgroundColor:"#ffffffff", borderRadius:"8px", padding:"5px"}} to="/category/pain-relief" className="link-box text-decoration-none text-dark px-2">Pain Relief</Link>
        <Link style={{backgroundColor:"#ffffffff", borderRadius:"8px", padding:"5px"}} to="/category/cold-and-flu" className="link-box text-decoration-none text-dark px-2">Cold and Flu</Link>
        <Link style={{backgroundColor:"#ffffffff", borderRadius:"8px" ,padding:"5px"}} to="/category/diabetes-care" className="link-box text-decoration-none text-dark px-2">Diabetes Care</Link>
        <Link style={{backgroundColor:"#ffffffff" ,borderRadius:"8px" ,padding:"5px"}} to="/category/first-aid" className="link-box text-decoration-none text-dark px-2">First Aid</Link>
      </div>
      <div className="shipping-box"  style={{backgroundColor:"#22b422ff",padding:"10px", marginRight:"30px", borderRadius:"8px"}} >
         Free Shipping Order By August
      </div>
    </nav>
     
   </div>
  );
};

export default SubNavbar;