import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const CheckoutDataProvider = ({children})=>{
    const d = new Date();
    const [checkoutData, setCheckoutData] = useState({
      numberOfTickets: 0,
      pricePerTicket: 0,
      movieTitle: "",
      discount: 0,
      date: d.toLocaleDateString("en-CA"),
    });

    return (
        <CheckoutContext.Provider value={{checkoutData,setCheckoutData}}>{children}</CheckoutContext.Provider>
    )
}

export const CheckoutDataState = () => {
    return useContext(CheckoutContext)
}

export default CheckoutDataProvider