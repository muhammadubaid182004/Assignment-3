
import { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import UserContext from "../context/UserContext";

function FinancialSummary(){

  const {List} = useContext(UserContext);
  // const [transList, setTransList] = useState([])
  const [salary, setSalary] = useState(0)
  const [rentalIncome, setRentalIncome] = useState(0)
  const [business, setBusiness] = useState(0)
  const [stocks, setStocks] = useState(0)
  const [shopping, setShopping] = useState(0)
  const [food, setFood] = useState(0)
  const [entertain, setEntertain] = useState(0)
  const [grocery, setGrocery] = useState(0)

    useEffect(()=>{
      setSalary(0);
      setRentalIncome(0);
      setBusiness(0);
      setStocks(0);
      setShopping(0);
      setFood(0);
      setEntertain(0);
      setGrocery(0);
      List.forEach((v)=>{
        if (v.Income == "Salary"){
          setSalary(prevVal => prevVal+1)
        }
        else if(v.Income == "Rental Income"){
            setRentalIncome(prevVal => prevVal+1)
        }
        else if (v.Income == "Business"){
            setBusiness(prevVal=> prevVal+1)
        }
        else if(v.Income == "Stocks"){
          setStocks(prevVal => prevVal+1)
        }
        else if(v.Expense == "Shopping"){
          setShopping(prevVal=> prevVal+1)
        }
        else if(v.Expense == "Food"){
          setFood(prevVal=> prevVal + 1)
        }
        else if(v.Expense == "Entertain"){
          setEntertain(prevVal => prevVal+1)
        }
        else if(v.Expense == "Grocery"){
          setGrocery(prevVal => prevVal+1)
        }
      })
    }, [List])

    const data1 = [
        ["Task", "Hours per Day"],
        ["Salary", salary],
        ["Rental Income", rentalIncome],
        ["Business", business],
        ["Stocks", stocks],
      ];
      const data2 = [
        ["Task", "Hours per Day"],
        ["Shopping", shopping],
        ["Food", food],
        ["Entertain", entertain],
        ["Grocery", grocery],
      ];
    
      const option1 = {
        title: "Income",
      };
      const option2 = {
        title: "Expense",
      };
    return(
      <div className="flex justify-center w-full ">
        <div className="bg-[#F9F9F9] xl:w-3/4 lg:w-1/3 md:w-4/5 sm:w-full px-9 py-3 rounded-xl">
        <div className="flex flex-col">
        <h1 className="font-bold text-2xl mb-12">Financial Summary</h1>
        <div className="flex flex-col gap-10 mb-5">
            <Chart
            chartType="PieChart"
            data={data1}
            options={option1}
            style={{backgroundColor: '#F9F9F9 !important'}}
            />
            <Chart
            chartType="PieChart"
            data={data2}
            options={option2}
            style={{backgroundColor: '#F9F9F9 !important'}}
            />
        </div>
        </div>

        </div>
      </div>

    )
}

export default FinancialSummary;