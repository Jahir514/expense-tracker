import { Pressable, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const IconsButton = ({ icon, size, color, onPress, style }) => {
  return (
    <Pressable style={(pressed) => pressed && styles.pressed} onPress={onPress}>
      <View style={[styles.iconContainer, style]}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  )
}
export default IconsButton

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 24,
    borderColor: 'white',
    borderWidth: 1,
    width: 35,
    height: 35,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
})
