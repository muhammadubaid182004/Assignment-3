import { Select, Input  } from 'antd';
const { TextArea } = Input;
import {  useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import UserContext from '../context/UserContext';

function Transaction(){

  const [income, setExpense] = useState(false)
  const [optionType, setOptionType] = useState("Income")
  const [incomeCategory, setIncomeCategory] = useState("None");
  const [expenseCategory, setExpenseCategory] = useState("None");
  const [description, setDescription] = useState("");

  const {setData, setAmount} = useContext(UserContext) 

  useEffect(()=>{
    // console.log("Changed type", optionType);
    
  }, [optionType])
  

      const {
        register,
        handleSubmit,
        setValue,
        reset,
        // watch,
        // formState: { errors },
      } = useForm();
    
    const selectType = (e, value, type) =>{
      e.preventDefault()
      setExpense(!income)
      setValue(`${type}`, value)
      setOptionType(value)
      // console.log(value);
      // console.log(optionType);
    }

    const addTransaction = (data) => {
      // console.log(data);
      setData(data)
      setAmount([optionType, data.amount])
      // console.log(optionType);
      reset();
      setIncomeCategory("None");
      setExpenseCategory("None"); 
      setDescription("");
    }

    const selectStyle2 = {
      width: '100%',
      color: 'gray',
      display: `${!income ? 'none' : 'block'}`,
    };

    const selectStyle1 = {
      width: '100%',
      color: 'gray',
      display: `${income ? 'none' : 'block'}`,
    };


    return(
      <div className='flex justify-center sm:w-full md:w-full'>

        <form className="lg:w-1/5 xl:w-3/4 md:border-2 sm:border-2 md:w-3/5 md:p-10 sm:w-96 sm:p-10 rounded-lg" onSubmit={handleSubmit(addTransaction)}>
          <h1 className='font-bold text-2xl mb-5'>Add Transaction</h1>

          <div className="mb-5">
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Type</p>
            <div className="flex flex-row-2 gap-4">
              <button 
                type="button" 
                className={`p-5 rounded-lg border cursor-pointer ${!income ? 'bg-[#D9E7E5] border-[#42887C] font-bold' : 'bg-[#EBEBEB] border'}`} 
                onClick={(event) => { selectType(event, "Income") }}
              >
                Income
              </button>
              <button 
                type="button" 
                className={`border p-5 rounded-lg cursor-pointer ${income ? 'bg-[#E6E2E6] border-[#401540] font-bold' : 'bg-[#EBEBEB] border'}`} 
                onClick={(event) => { selectType(event, "Expense") }}
              >
                Expense
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>

            <Select
              defaultValue="None"
              value = {incomeCategory}
              style={selectStyle1}
              onChange={(value) => { setIncomeCategory(value); setValue("Income", value) }}
              options={[
                { value: 'Salary', label: 'Salary' },
                { value: 'Rental Income', label: 'Rental Income' },
                { value: 'Business', label: 'Business' },
                { value: 'Stocks', label: 'Stocks' },
              ]}
            />

            <Select
              defaultValue="None"
              value={expenseCategory}
              style={selectStyle2}
              onChange={(value) => { setExpenseCategory(value); setValue("Expense", value)}}
              options={[
                { value: 'Shopping', label: 'Shopping' },
                { value: 'Food', label: 'Food' },
                { value: 'Entertain', label: 'Entertain' },
                { value: 'Grocery', label: 'Grocery' },
              ]}
            />
       </div>

  <div>
    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
    <input
      type="text"
      {...register("amount")}
      id="amount"
      placeholder='$$'
      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
    />
  </div>

  <div className='mt-2 text-sm font-medium text-gray-900 dark:text-white'>
    <label htmlFor="description" className='block mb-2'>Description</label>
    <TextArea
      rows={4}
      onChange={(e) => { setDescription( e.target.value); setValue("description", e.target.value)}}
      value={description}
    />
  </div>

  <div className='mt-2.5'>
    <button type="submit" className='bg-[#FFC727] text-white w-full py-1.5 text-sm rounded-lg font-semibold'>Add Transaction</button>
  </div>
</form>
      </div>

    )
    }

    
export default Transaction;