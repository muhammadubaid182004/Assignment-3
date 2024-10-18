import { useState } from 'react'
import './App.css'
import AvailableBalance from './Components/Available_Balance/available-balance'
import UserContextProvider from './Components/context/UserContextProvider'
import FinancialSummary from './Components/Financial_Summary/Financial_Summary'
import IncomeExpense from './Components/Income_Expense/income_expense'
import Transaction from './Components/Transaction/transaction'
import TransactionHistory from './Components/Transaction_History/transaction_history'



function App() {
  const [visibleComponent, setVisibleComponent] = useState('TransactionHistory');
  // const [transactionButton, setTransactionButton] = useState(false);
  // const [transactionHistoryButton, setTransactionHistoryButton] = useState(false);
  // const [financialSummaryButton, setFinancialSummaryButton] = useState(false); 

  const renderVisibleComponent = () => {
    switch (visibleComponent) {
      case 'Transaction':
        return <Transaction />;
      case 'TransactionHistory':
        return <TransactionHistory />;
      case 'FinancialSummary':
        return <FinancialSummary />;
      default:
        return null;
    }
  }

  return (
    <UserContextProvider>
      {/* <div>
        <AvailableBalance/>
        <IncomeExpense/>
        <div className='flex flex-row-3 justify-around mb-5'>
          <Transaction/>
          <TransactionHistory/>
          <FinancialSummary/>
        </div>
      </div> */}
      <AvailableBalance/>
      <IncomeExpense/>
      <div>
        <div className="hidden xl:flex xl:flex-row xl:justify-around mb-5">
          <Transaction />
          <TransactionHistory />
          <FinancialSummary />
        </div>
        

        <div className="flex flex-col xl:hidden mb-5">
          {renderVisibleComponent()}
          <div className="flex justify-around mt-5">
          {visibleComponent !== 'Transaction' && (
              <button
                onClick={() => setVisibleComponent('Transaction')}
                className="px-4 py-2 bg-[#FFC727] text-white rounded-lg"
              >
                Transaction
              </button>
            )}
            {visibleComponent !== 'TransactionHistory' && (
              <button
                onClick={() => setVisibleComponent('TransactionHistory')}
                className="px-4 py-2 bg-[#FFC727] text-white  rounded-lg"
              >
                Transaction History
              </button>
            )}
            {visibleComponent !== 'FinancialSummary' && (
              <button
                onClick={() => setVisibleComponent('FinancialSummary')}
                className="px-4 py-2 bg-[#FFC727] text-white rounded-lg"
              >
                Financial Summary
              </button>
            )}
          </div>
        </div>
      </div>
      
    </UserContextProvider>
  )
}

export default App
