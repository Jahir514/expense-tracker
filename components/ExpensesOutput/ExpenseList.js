import { FlatList, Text } from 'react-native'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem expense={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
export default ExpenseList
