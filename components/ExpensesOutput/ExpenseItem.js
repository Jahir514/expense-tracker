import { Text, View, StyleSheet, Pressable } from 'react-native'
import { GlobalStyles } from '../../constants/style'
import { getFormattedDate } from '../../utils/date'

const ExpenseItem = ({ expense }) => {
  const { description, date, price } = expense
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <View>
            <Text style={[styles.description, styles.text]}>{description}</Text>
            <Text style={[styles.text]}>{getFormattedDate(date)}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text>{price}Tk</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 12,
    borderRadius: 8,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
  priceContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
})
