// src/screens/HomeScreen.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TUTORIALS = [
  { id: '1', title: 'Tutorial 01: Pengenalan', completed: true },
  { id: '2', title: 'Tutorial 02: Struktur Project', completed: true },
  { id: '3', title: 'Tutorial 03: Komponen Dasar', completed: true },
  { id: '4', title: 'Tutorial 04: Styling', completed: true },
  { id: '5', title: 'Tutorial 05: State dan Props', completed: true },
  { id: '6', title: 'Tutorial 06: List dan ScrollView', completed: true },
  { id: '7', title: 'Tutorial 07: Input Pengguna', completed: true },
  { id: '8', title: 'Tutorial 08: Navigasi', completed: true },
];

export default function HomeScreen({ navigation }) {
  const completedCount = TUTORIALS.filter(t => t.completed).length;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { tutorial: item })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={[styles.status, item.completed && styles.statusDone]}>
          {item.completed ? '✅ Selesai' : '⏳ Belum'}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.statsBar}>
        <Text style={styles.statsText}>
          Progress: {completedCount}/{TUTORIALS.length} tutorial selesai
        </Text>
      </View>

      <FlatList
        data={TUTORIALS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>👤 Lihat Profil Saya</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statsBar: {
    backgroundColor: '#e8f4f8',
    padding: 15,
    alignItems: 'center',
  },
  statsText: {
    color: '#3498db',
    fontWeight: '600',
  },
  list: {
    padding: 15,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2c3e50',
  },
  status: {
    fontSize: 12,
    color: '#e67e22',
    marginTop: 4,
  },
  statusDone: {
    color: '#27ae60',
  },
  arrow: {
    fontSize: 24,
    color: '#bdc3c7',
  },
  profileButton: {
    backgroundColor: '#2c3e50',
    margin: 15,
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});