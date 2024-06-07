import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const MasterLayout = () => {
    return ( <>
        <Header></Header>
        <Outlet></Outlet>
    </> );
}
 
export default MasterLayout;