import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutingComponent from './config/routing.config'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import {store} from './state/store'
import { ChakraProvider } from "@chakra-ui/react";
import CheckoutDataProvider from './context/ticket'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <CheckoutDataProvider>
          <RoutingComponent />
        </CheckoutDataProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
