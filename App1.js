import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from './src/components';

/**
 * Modul Praktikum React Native
 * Laboratorium Informatika - Fakultas Teknik
 * Universitas Muhammadiyah Makassar
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>📱</Text>
        <Text style={styles.title}>Modul Praktikum</Text>
        <Text style={styles.subtitle}>React Native</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>HALO, MUHAMMAD LUTHFI ALFARITSI</Text>
        <Text style={styles.description}>
          Modul ini akan membantu Anda mempelajari pengembangan aplikasi mobile
          menggunakan React Native dan Expo.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>📚 8 Tutorial Lengkap</Text>
          <Text style={styles.infoText}>Dari dasar hingga navigasi</Text>
        </View>

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>Mulai Belajar:</Text>
          <Text style={styles.instructionText}>1. Buka folder docs/tutorials/</Text>
          <Text style={styles.instructionText}>2. Mulai dari 01-pengenalan.md</Text>
          <Text style={styles.instructionText}>3. Ikuti tutorial secara berurutan</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Laboratorium Informatika</Text>
        <Text style={styles.footerSubtext}>Fakultas Teknik - UNISMUH Makassar</Text>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064821ff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },
  infoBox: {
    backgroundColor: '#e8f4f8',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  instructionBox: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3498db',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#95a5a6',
    marginTop: 2,
  },
});