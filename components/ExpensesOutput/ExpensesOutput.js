import { Text, View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyles } from '../../constants/style'

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensePeriod={expensePeriod} />
      <ExpenseList expenses={expenses} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 18,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
})
