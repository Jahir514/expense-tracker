import { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import IconsButton from '../components/ui/IconsButton'
import { GlobalStyles } from '../constants/style'
import Button from '../components/ui/Button'
import { ExpenseContext } from '../store/expense-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext)
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId // !! sign makes a value boolean
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])
  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(expenseId)
    navigation.goBack()
  }
  const cancelExpenseHandler = () => {
    navigation.goBack()
  }
  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpense(expenseId, expenseData)
    } else {
      expenseCtx.addExpense(expenseData)
    }
    navigation.goBack()
  }
  let content = null
  if (isEditing) {
    content = (
      <View style={styles.deleteContainer}>
        <IconsButton
          icon='trash'
          size={36}
          color={GlobalStyles.colors.error500}
          onPress={deleteExpenseHandler}
          style={{ borderColor: 'transparent' }}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelExpenseHandler}
        onSubmit={confirmHandler}
      />
      {/* <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          mode='flat'
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View> */}
      {content}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
})
