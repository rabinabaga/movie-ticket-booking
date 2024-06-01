import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import BreadcrumbComponent from "../../components/bread-component";

const MasterLayout = () => {
    return ( <>
        <Header></Header>
        <BreadcrumbComponent/>
        <Outlet></Outlet>
    </> );
}
 
export default MasterLayout;