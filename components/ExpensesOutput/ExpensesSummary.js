import { Text, View } from 'react-native'
const ExpensesSummary = ({ expenses, expensePeriod }) => {
  const expensesCalculation = expenses.reduce((sum, expense) => {
    return sum + expense.price
  }, 0)
  return (
    <View>
      <Text>{expensePeriod} </Text>
      <Text>{expensesCalculation}Tk</Text>
    </View>
  )
}
export default ExpensesSummary
