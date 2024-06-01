import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
    const location = useLocation();
    let currentLink = "";
 
    const spacedLocation = location.pathname.replaceAll("%20"," ");
    console.log("spaced location", spacedLocation);
    const crumbs = spacedLocation.split("/")
      .filter((crumb) => crumb !== " ")
      .map((crumb) => {
        currentLink = +`/${crumb}`;
        return (
          <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        );
      });
    console.log("location", location);
    return ( <>
        {crumbs}
    </> );
}
 
export default BreadcrumbComponent;