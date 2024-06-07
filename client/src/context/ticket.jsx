import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const CheckoutDataProvider = ({children})=>{
    const [checkoutData, setCheckoutData] = useState({
        numberOfTickets:0,
        pricePerTicket:0,
        movieTitle:"",
        discount:0
    });

    return (
        <CheckoutContext.Provider value={{checkoutData,setCheckoutData}}>{children}</CheckoutContext.Provider>
    )
}

export const CheckoutDataState = () => {
    return useContext(CheckoutContext)
}

export default CheckoutDataProvider