import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/expense-context'
import { getDateMinusSevenDays } from '../utils/date'

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const last7Days = getDateMinusSevenDays(7, today)
    return expense.date > last7Days
  })
  return (
    <ExpensesOutput expenses={recentExpenses} expensePeriod='last 7 days' />
  )
}

export default RecentExpenses
