import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ManageExpense from './screens/ManageExpense'
import RecentExpenses from './screens/RecentExpenses'
import AllExpenses from './screens/AllExpenses'
import { GlobalStyles } from './constants/style'
import { Ionicons } from '@expo/vector-icons'
import IconsButton from './components/ui/IconsButton'
import ExpenseContextProvider from './store/expense-context'
const stack = createStackNavigator()
const tab = createBottomTabNavigator()

const ExpensesOverview = () => {
  return (
    <tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconsButton
            onPress={() => navigation.navigate('ManageExpense')}
            icon='add'
            size={24}
            color={tintColor}
          />
        ),
      })}
    >
      <tab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      />
    </tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <ExpenseContextProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name='ManageExpense'
              component={ManageExpense}
              options={{
                presentation: 'card',
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  )
}
