import { View, StyleSheet, Text } from 'react-native'
import InputField from './InputField'
import { GlobalStyles } from '../../constants/style'
import Button from '../ui/Button'
import { useState } from 'react'
const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  //To handle all the input with one state and one handler function. we can use multiple state and multiple function instead
  const [inputValue, setInputValue] = useState({
    price: '',
    date: '',
    description: '',
  })
  const inputChangeHandler = (inputType, enteredValue) => {
    setInputValue((currentValue) => {
      return {
        ...currentValue,
        [inputType]: enteredValue,
      }
    })
  }
  const submitHandler = () => {
    const expenseData = {
      price: +inputValue.price,
      date: new Date(inputValue.date),
      description: inputValue.description,
    }
    onSubmit(expenseData)
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputTop}>
        <InputField
          label='Amount'
          inputSettings={{
            placeholder: 'Expense Amount',
            keyboardType: 'number-pad',
            onChangeText: inputChangeHandler.bind(this, 'price'),
            value: inputValue.price,
          }}
          style={styles.inputRow}
        />
        <InputField
          label='Date'
          inputSettings={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValue.date,
          }}
          style={styles.inputRow}
        />
      </View>
      <InputField
        label='Description'
        inputSettings={{
          autoCorrect: false,
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  )
}
export default ExpenseForm

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: GlobalStyles.colors.primary100,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.primary100,
    paddingBottom: 5,
  },
  inputTop: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  inputRow: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
})
