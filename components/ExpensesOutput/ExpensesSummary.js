import { Text, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'
const ExpensesSummary = ({ expenses, expensePeriod }) => {
  const expensesCalculation = expenses.reduce((sum, expense) => {
    return sum + expense.price
  }, 0)
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensePeriod} </Text>
      <Text style={styles.sum}>{expensesCalculation.toFixed(2)}Tk</Text>
    </View>
  )
}
export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
    textTransform: 'capitalize',
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
})
