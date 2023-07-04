import { createContext, useReducer } from 'react'

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, date, price }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, price }) => {},
})

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

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload?.id
      )
      const updateableExpense = state[updateableExpenseIndex]
      const updatedItem = { ...updateableExpense, ...action.payload.data } //if same data then change previous data with new one
      const updatedExpenses = [...state]
      updatedExpenses[updateableExpenseIndex] = updatedItem
      return updatedExpenses
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state
  }
}

const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, DummyExpenses)

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData })
  }
  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }
  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  }
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider
