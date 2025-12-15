import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCard({ 
  name, 
  nim, 
  jurusan, 
  imageUri,
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image 
        source={{ uri: imageUri || 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.nim}>NIM: {nim}</Text>
        <Text style={styles.jurusan}>{jurusan}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ecf0f1',
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  jurusan: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 2,
  },
});