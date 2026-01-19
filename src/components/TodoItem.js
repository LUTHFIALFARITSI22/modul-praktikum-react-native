// src/components/TodoItem.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.checkbox}
        onPress={() => onToggle(item.id)}
      >
        <Text style={styles.checkmark}>
          {item.completed ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={[
          styles.title,
          item.completed && styles.completedTitle
        ]}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  checkmark: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#2c3e50',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  date: {
    fontSize: 12,
    color: '#bdc3c7',
    marginTop: 4,
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 20,
  },
});