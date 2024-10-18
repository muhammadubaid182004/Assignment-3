import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";

function TransactionHistory() {
    const { data, setList, setAmountBack} = useContext(UserContext);
    // const [type, setType] = useState(false);
    const [transactionHistory, setTransactionHistory] = useState([]);
    // console.log(data);


        

    useEffect(() => {

        if (data) {
            setTransactionHistory(prevHistory => [...prevHistory, data]);
        }

    }, [data]);

    useEffect(() => {
        console.log("Transaction history updated:", transactionHistory);
        setList([...transactionHistory]); 
    }, [transactionHistory, setList]);

    const deleteTransaction = (index, amt, type) => {
        var newList = transactionHistory.filter((val, indexFilter)=> index != indexFilter)
        setAmountBack([type, amt])
        setTransactionHistory(newList)
    }
    
    return (
        <>
    <div className="h-[35.5rem] bg-[#F9F9F9] xl:w-3/4 p-10 overflow-y-scroll section rounded-xl mx-12">
    <h1 className="font-bold text-2xl mb-3">Transaction History</h1>
    {transactionHistory.length > 0 ? (
        transactionHistory.map((v, index) => {
            const isIncome = "Income" in v; // Check if "Income" exists in the object
            return (
                <div key={index} className="block p-6 pt-3 pb-3 w-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3  ">
                    <div className="flex justify-between">
                        <p className="text-gray-400">{v.Income || v.Expense}</p>
                        <div className="flex gap-5">
                            <p className={`p-0.5 px-2 text-sm rounded-full ${isIncome ? 'text-[#5AB064] bg-[#ECFFEA]' : 'text-[#B05A5A] bg-[#FFEAEA]'}`}>
                                {isIncome ? 'Income' : 'Expense'}
                            </p>
                            <svg onClick={()=>{deleteTransaction(index, v.amount, isIncome ? 'Income' : 'Expense')}} className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M1.875 3.125H18.125M6.875 3.125V1.84375C6.875 1.52052 7.0034 1.21052 7.23196 0.981964C7.46052 0.753404 7.77052 0.625 8.09375 0.625H11.9062C12.0663 0.625 12.2248 0.656524 12.3726 0.717772C12.5205 0.77902 12.6549 0.868792 12.768 0.981964C12.8812 1.09513 12.971 1.22949 13.0322 1.37735C13.0935 1.52522 13.125 1.6837 13.125 1.84375V3.125M16.4062 3.125L15.5 17.8437C15.492 18.2474 15.3281 18.6322 15.0427 18.9177C14.7572 19.2031 14.3724 19.367 13.9688 19.375H6.03125C5.62764 19.367 5.24279 19.2031 4.95734 18.9177C4.67189 18.6322 4.50799 18.2474 4.5 17.8437L3.59375 3.125" stroke="#D14D4D" />
                                    <path d="M10 5.625V16.875M6.875 5.625L7.5 16.875M13.125 5.625L12.5 16.875" stroke="#D14D4D" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">${v.amount}</p>
                        <p className="text-gray-400">{v.description}</p>
                    </div>
                </div>
            );
        })
    ) : (
        <p>No transactions available.</p>
    )}
</div>

        </>
    );
}

export default TransactionHistory;

