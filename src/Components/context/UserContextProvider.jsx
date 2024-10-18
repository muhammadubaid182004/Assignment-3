import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(null)
    const [amountBack, setAmountBack] = useState(null)
    const [remainingAmount, setRemainingAmount] = useState(0)
    const [List, setList] = useState([])

    return (
        <UserContext.Provider value={{data, setData, amount, setAmount, remainingAmount, setRemainingAmount,List, setList, amountBack, setAmountBack}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;