import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Button Showcase</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Variants</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Primary" variant="primary" onPress={() => {}} />
          <StyledButton title="Secondary" variant="secondary" onPress={() => {}} />
          <StyledButton title="Outline" variant="outline" onPress={() => {}} />
          <StyledButton title="Danger" variant="danger" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>Sizes</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Small" size="small" onPress={() => {}} />
          <StyledButton title="Medium" size="medium" onPress={() => {}} />
          <StyledButton title="Large" size="large" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>States</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Normal" onPress={() => {}} />
          <StyledButton title="Disabled" disabled onPress={() => {}} />
        </View>
      </ScrollView>
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 15,
  },
  buttonGroup: {
    gap: 10,
  },
});