import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import MasterLayout from "../pages/layouts/master_layout";
import HomePage from "../pages/homepage";
import EventDetails from "../pages/event-details";
import {OrderConfirmationPage} from "../pages/order-confirmation-page";
import BasicDocument from "../pages/invoice_page";

const RoutingComponent = () => {
  
  // let profile_username = localStorage.getItem("user").username;
  // console.log(localStorage.getItem("user"));
  // const dispatch = useDispatch();
  // dispatch(setLoggedInUser(response.result.user))
//   const profile_username = useSelector((root) => {
//     console.log("in use selector in userp rofile page", root.User.loggedInUser);
//     return root.User.loggedInUser?.username;
//   });
  return (
    <div>
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout></MasterLayout>}>
            <Route index element={<HomePage/>}></Route>
            <Route
              path="eventDetails/:imdbID"
              element={<EventDetails></EventDetails>}
            ></Route>
            <Route path="/your-invoice" element={<BasicDocument/>}></Route>
            <Route path="/:movie_name/order-confirmation" element={<OrderConfirmationPage></OrderConfirmationPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingComponent;
