import React, { createContext, useState } from 'react';

const CheckoutContext = createContext();


const CheckoutProvider = ({ children }) => {

    const [dataCart, setDataCart] = useState([]);

    return (
        <CheckoutContext.Provider value={{ dataCart, setDataCart }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export { CheckoutContext, CheckoutProvider };
