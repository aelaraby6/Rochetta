import { Link } from "react-router-dom";

export default function CategoryLinks() {
  return (
    <div className="category-links">
      <Link to="/category/pain-relief">Pain Relief</Link>
      <Link to="/category/skincare">Skin Care</Link>
      <Link to="/category/ChildBabyCare">Child & Baby Care</Link>
      <Link to="/category/ColdandFlu">Cold and Flu</Link>
      <Link to="/category/FirstAid">First Aid</Link>
      <Link to="/category/DiabetesCare">Diabetes Care</Link>
    </div>
  );
}
