// import { useContext, useEffect,useState } from "react";
// import UserContext from "../context/UserContext";


// function AvailableBalance(){

//     const [amountA, setAmountA] = useState(0)
//     const {remainingAmount,amount,amountBack} = useContext(UserContext);

//     useEffect(()=> {
//         if(remainingAmount){
//             setAmountA(remainingAmount)
//         }
//     }, [remainingAmount,amount,amountBack])
    


//     return(
//         <>

//             <div className=" m-12 mb-4 mt-6">
//                 <div className="block py-6 px-8 bg-[#455A64] border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//                     <p className="text-2xl">Available Balance</p>
//                     <p className="text-xl mt-1">${amountA}</p>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default AvailableBalance;

import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";


function AvailableBalance(){

    const [amountA, setAmountA] = useState(0);
    const { remainingAmount, amount, amountBack } = useContext(UserContext);

    useEffect(()=> {
        if (remainingAmount != null) {
            setAmountA(remainingAmount);
            console.log("Updated Available Balance:", remainingAmount);
        }
    }, [remainingAmount, amount, amountBack]); // removed amountA from the dependency array


    return (
        <>

            <div className="m-12 mb-4 mt-6">
                <div className="block py-6 px-8 bg-[#455A64] border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="text-2xl">Available Balance</p>
                    <p className="text-xl mt-1">${amountA}</p>
                </div>
            </div>

        </>
    );
}

export default AvailableBalance;
