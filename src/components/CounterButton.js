// src/components/CounterButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CounterButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#3498db',
  },
  danger: {
    backgroundColor: '#e74c3c',
  },
  secondary: {
    backgroundColor: '#95a5a6',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
  },
  dangerText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
});