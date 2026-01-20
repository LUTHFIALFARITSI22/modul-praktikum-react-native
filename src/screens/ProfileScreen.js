// src/screens/ProfileScreen.js
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>MUHAMMAD LUTHFI ALFARITSI</Text>
        <Text style={styles.nim}>NIM: 105841117122</Text>
        <Text style={styles.jurusan}>Teknik Informatika</Text>
        <Text style={styles.fakultas}>Fakultas Teknik - UNISMUH Makassar</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Tutorial</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Selesai</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>
      </View>

      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>🎉 Selamat!</Text>
        <Text style={styles.achievementText}>
          Anda telah menyelesaikan semua tutorial React Native!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileCard: {
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    backgroundColor: '#ecf0f1',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  jurusan: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 5,
  },
  fakultas: {
    fontSize: 12,
    color: '#95a5a6',
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  achievementCard: {
    backgroundColor: '#27ae60',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  achievementText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 10,
  },
});