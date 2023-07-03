import { Text, View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyles } from '../../constants/style'

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  const DummyExpenses = [
    {
      id: 'e1',
      description: 'a pair of shoes',
      price: 2500,
      date: new Date('2023-06-25'),
    },
    {
      id: 'e2',
      description: 'T shirt',
      price: 1500,
      date: new Date('2023-06-22'),
    },
    {
      id: 'e3',
      description: 'a pair of sandle',
      price: 200,
      date: new Date('2023-06-27'),
    },
    {
      id: 'e4',
      description: 'Toothpaste',
      price: 100,
      date: new Date('2023-06-26'),
    },
    {
      id: 'e5',
      description: 'Mango',
      price: 800,
      date: new Date('2023-06-28'),
    },
    {
      id: 'e6',
      description: 'Orange',
      price: 1200,
      date: new Date('2023-06-29'),
    },
    {
      id: 'e7',
      description: 'Pants',
      price: 3500,
      date: new Date('2023-06-25'),
    },
    {
      id: 'e8',
      description: 'Vegetables',
      price: 100,
      date: new Date('2023-06-24'),
    },
    {
      id: 'e9',
      description: 'Cigarates',
      price: 50,
      date: new Date('2023-06-25'),
    },
    {
      id: 'e10',
      description: 'Mobile',
      price: 7500,
      date: new Date('2023-07-01'),
    },
  ]
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DummyExpenses} expensePeriod={expensePeriod} />
      <ExpenseList expenses={DummyExpenses} />
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
