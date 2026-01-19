// App.js
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import CounterButton from './src/components/CounterButton';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Tentukan warna berdasarkan nilai count
  const getCountColor = () => {
    if (count > 0) return '#27ae60'; // Hijau
    if (count < 0) return '#e74c3c'; // Merah
    return '#7f8c8d'; // Abu-abu
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Counter App</Text>
        <Text style={styles.headerSubtitle}>Belajar State dan Props</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.countContainer}>
          <Text style={styles.label}>Nilai Counter:</Text>
          <Text style={[styles.count, { color: getCountColor() }]}>
            {count}
          </Text>
          <Text style={styles.status}>
            {count > 0 ? 'Positif 📈' : count < 0 ? 'Negatif 📉' : 'Nol ⚖️'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CounterButton
            title="- 1"
            onPress={decrement}
            variant="danger"
          />
          <CounterButton
            title="Reset"
            onPress={reset}
            variant="secondary"
          />
          <CounterButton
            title="+ 1"
            onPress={increment}
            variant="primary"
          />
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>💡 Penjelasan:</Text>
        <Text style={styles.infoText}>
          • State: count = {count}{'\n'}
          • Props: title, onPress, variant pada button{'\n'}
          • setCount() memicu re-render
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  count: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 18,
    marginTop: 10,
    color: '#7f8c8d',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  infoBox: {
    backgroundColor: '#e8f4f8',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});