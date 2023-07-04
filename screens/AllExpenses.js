import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/expense-context'

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext)
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensePeriod='Total' />
  )
}

export default AllExpenses
