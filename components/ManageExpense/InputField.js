import { View, Text, TextInput, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'

const InputField = ({ label, inputSettings, style }) => {
  const inputStyle = [styles.input]
  if (inputSettings && inputSettings.multiline) {
    inputStyle.push(styles.inputMultiline)
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...inputSettings} />
    </View>
  )
}
export default InputField

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 15,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
})
