import { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import UserContext from "../context/UserContext";

function FinancialSummary() {
  const { List } = useContext(UserContext);
  const [incomeData, setIncomeData] = useState({
    salary: 0,
    rentalIncome: 0,
    business: 0,
    stocks: 0,
  });
  const [expenseData, setExpenseData] = useState({
    shopping: 0,
    food: 0,
    entertain: 0,
    grocery: 0,
  });

  useEffect(() => {
    // Create a new object to hold the updated values
    const incomeCounts = {
      salary: 0,
      rentalIncome: 0,
      business: 0,
      stocks: 0,
    };
    const expenseCounts = {
      shopping: 0,
      food: 0,
      entertain: 0,
      grocery: 0,
    };

    // Loop through the transactions to count the occurrences of each category
    List.forEach((v) => {
      if (v.Income === "Salary") {
        incomeCounts.salary += 1;
      } else if (v.Income === "Rental Income") {
        incomeCounts.rentalIncome += 1;
      } else if (v.Income === "Business") {
        incomeCounts.business += 1;
      } else if (v.Income === "Stocks") {
        incomeCounts.stocks += 1;
      } else if (v.Expense === "Shopping") {
        expenseCounts.shopping += 1;
      } else if (v.Expense === "Food") {
        expenseCounts.food += 1;
      } else if (v.Expense === "Entertain") {
        expenseCounts.entertain += 1;
      } else if (v.Expense === "Grocery") {
        expenseCounts.grocery += 1;
      }
    });

    // Update the state in one go after the loop finishes
    setIncomeData(incomeCounts);
    setExpenseData(expenseCounts);
  }, [List]);

  const data1 = [
    ["Task", "Count"],
    ["Salary", incomeData.salary],
    ["Rental Income", incomeData.rentalIncome],
    ["Business", incomeData.business],
    ["Stocks", incomeData.stocks],
  ];

  const data2 = [
    ["Task", "Count"],
    ["Shopping", expenseData.shopping],
    ["Food", expenseData.food],
    ["Entertain", expenseData.entertain],
    ["Grocery", expenseData.grocery],
  ];

  const option1 = {
    title: "Income",
  };
  const option2 = {
    title: "Expense",
  };

  return (
    <div className="flex justify-center w-full">
      <div className="bg-[#F9F9F9] xl:w-3/4 lg:w-1/3 md:w-4/5 sm:w-full px-9 py-3 rounded-xl">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-12">Financial Summary</h1>
          <div className="flex flex-col gap-10 mb-5">
            <Chart
              chartType="PieChart"
              data={data1}
              options={option1}
              style={{ backgroundColor: "#F9F9F9 !important" }}
            />
            <Chart
              chartType="PieChart"
              data={data2}
              options={option2}
              style={{ backgroundColor: "#F9F9F9 !important" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialSummary;
