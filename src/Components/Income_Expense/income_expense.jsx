import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";


function IncomeExpense(){

    const {amount, amountBack} = useContext(UserContext);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const {setRemainingAmount} = useContext(UserContext);

    
    useEffect(() => {
        if (amount != null) {
            if (amount[0] === "Expense") {
                setExpense(prevExpense => prevExpense + parseInt(amount[1])); 
            } else if (amount[0] === "Income") {
                setIncome(prevIncome => prevIncome + parseInt(amount[1])); 
            }
        }
    }, [amount]);
    
    useEffect(()=> {
        if (amountBack != null) {
            if (amountBack[0] === "Expense") {
                setExpense(prevExpense => prevExpense - parseInt(amountBack[1])); 
            } else if (amountBack[0] === "Income") {
                setIncome(prevIncome => prevIncome - parseInt(amountBack[1])); 
            }
        }
    }, [amountBack])
    
    
    useEffect(() => {
        // console.log("Income:", income);
        // console.log("Expense:", expense);

        
        setRemainingAmount(income - expense);    
    }, [income, expense, amount, amountBack,setRemainingAmount]);
    
    


    return (



        <>
        <div className="flex flex-4 gap-4 m-12 mt-1 mb-4">
            <div className="w-2/3">
                <div className="block py-3 px-8 bg-[#D9E7E5] border border-gray-200 rounded-lg shadow">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#42887C"/>
                    <path d="M11.6666 16.6667V20.0008H12.5V25H11.6666V27.5H25L27.5 27.5008V27.5H28.3333V25H27.5V20.0008H28.3333V16.6667L20 11.6667L11.6666 16.6667ZM15 25V20.0008H16.6666V25H15ZM19.1666 25V20.0008H20.8333V25H19.1666ZM25 25H23.3333V20.0008H25V25ZM21.6666 16.6667C21.6666 16.8856 21.6234 17.1024 21.5396 17.3046C21.4557 17.5068 21.3329 17.6906 21.1781 17.8453C21.0232 18.0001 20.8394 18.1229 20.6371 18.2066C20.4348 18.2903 20.2181 18.3334 19.9991 18.3333C19.7802 18.3333 19.5634 18.2901 19.3612 18.2063C19.159 18.1224 18.9752 17.9996 18.8204 17.8448C18.6657 17.6899 18.5429 17.5061 18.4592 17.3038C18.3755 17.1015 18.3324 16.8847 18.3325 16.6658C18.3326 16.2237 18.5083 15.7997 18.821 15.4871C19.1337 15.1746 19.5578 14.999 20 14.9992C20.4421 14.9993 20.8661 15.175 21.1786 15.4877C21.4912 15.8004 21.6667 16.2245 21.6666 16.6667Z" fill="white"/>
                    </svg>
                    <p className="pt-1.5">${income}</p>
                    <p className="font-bold">Income</p>
                </div>
            </div>
            <div className="w-2/3">
                <div className="block py-3 px-8 bg-[#E6E2E6] border border-gray-200 rounded-lg shadow">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#836F81"/>
                <path d="M21.6667 17.5H28.3334V22.5H21.6667V17.5Z" fill="white"/>
                <path d="M26.6667 12.5H14.1667C12.7884 12.5 11.6667 13.6217 11.6667 15V25C11.6667 26.3783 12.7884 27.5 14.1667 27.5H26.6667C27.5859 27.5 28.3334 26.7525 28.3334 25.8333V24.1667H21.6667C20.7475 24.1667 20 23.4192 20 22.5V17.5C20 16.5808 20.7475 15.8333 21.6667 15.8333H28.3334V14.1667C28.3334 13.2475 27.5859 12.5 26.6667 12.5Z" fill="white"/>
                </svg>
                    <p className="pt-1.5">${expense}</p>
                    <p className="font-bold">Expense</p>
                </div>

            </div>

        </div>
        </>
    )
}


export default IncomeExpense;