// src/screens/DetailScreen.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { tutorial } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>📚</Text>
        <Text style={styles.title}>{tutorial.title}</Text>
        <View style={[styles.badge, tutorial.completed && styles.badgeDone]}>
          <Text style={styles.badgeText}>
            {tutorial.completed ? 'Selesai' : 'Belum Selesai'}
          </Text>
        </View>
        <Text style={styles.description}>
          Tutorial ini membahas konsep-konsep penting dalam pengembangan
          aplikasi React Native. Pastikan Anda memahami semua materi
          sebelum melanjutkan ke tutorial berikutnya.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 15,
  },
  badge: {
    backgroundColor: '#e67e22',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeDone: {
    backgroundColor: '#27ae60',
  },
  badgeText: {
    color: 'white',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
  },
  backButton: {
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
});