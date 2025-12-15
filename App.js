import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Mahasiswa</Text>
      </View>
     
      <ProfileCard
        name="MUHAMMAD LUTHFI ALFARITSI"
        nim="105841117122"
        jurusan="Teknik Informatika"
        imageUri="https://via.placeholder.com/100"
        onPress={() => alert('Card ditekan!')}
      />
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
});