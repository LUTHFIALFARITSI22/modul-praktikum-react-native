// App.js
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FormInput from './src/components/FormInput';

export default function App() {
  const [form, setForm] = useState({
    nama: '',
    nim: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
    alamat: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // Clear error saat user mengetik
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validasi Nama
    if (!form.nama.trim()) {
      newErrors.nama = 'Nama wajib diisi';
    } else if (form.nama.length < 3) {
      newErrors.nama = 'Nama minimal 3 karakter';
    }

    // Validasi NIM
    if (!form.nim.trim()) {
      newErrors.nim = 'NIM wajib diisi';
    } else if (!/^\d{12}$/.test(form.nim)) {
      newErrors.nim = 'NIM harus 12 digit angka';
    }

    // Validasi Email
    if (!form.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Validasi Password
    if (!form.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }

    // Validasi Konfirmasi Password
    if (form.password !== form.konfirmasiPassword) {
      newErrors.konfirmasiPassword = 'Password tidak cocok';
    }

    // Validasi Alamat
    if (!form.alamat.trim()) {
      newErrors.alamat = 'Alamat wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
      Alert.alert(
        'Registrasi Berhasil! 🎉',
        `Selamat datang, ${form.nama}!\nNIM: ${form.nim}`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleReset = () => {
    setForm({
      nama: '',
      nim: '',
      email: '',
      password: '',
      konfirmasiPassword: '',
      alamat: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📝 Form Registrasi</Text>
          <Text style={styles.headerSubtitle}>
            Lengkapi data diri Anda
          </Text>
        </View>

        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <FormInput
            label="Nama Lengkap"
            value={form.nama}
            onChangeText={(v) => updateForm('nama', v)}
            placeholder="Masukkan nama lengkap"
            error={errors.nama}
            autoCapitalize="words"
          />

          <FormInput
            label="NIM"
            value={form.nim}
            onChangeText={(v) => updateForm('nim', v)}
            placeholder="Masukkan NIM (12 digit)"
            error={errors.nim}
            keyboardType="numeric"
          />

          <FormInput
            label="Email"
            value={form.email}
            onChangeText={(v) => updateForm('email', v)}
            placeholder="Masukkan email"
            error={errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <FormInput
            label="Password"
            value={form.password}
            onChangeText={(v) => updateForm('password', v)}
            placeholder="Masukkan password"
            error={errors.password}
            secureTextEntry
          />

          <FormInput
            label="Konfirmasi Password"
            value={form.konfirmasiPassword}
            onChangeText={(v) => updateForm('konfirmasiPassword', v)}
            placeholder="Ulangi password"
            error={errors.konfirmasiPassword}
            secureTextEntry
          />

          <FormInput
            label="Alamat"
            value={form.alamat}
            onChangeText={(v) => updateForm('alamat', v)}
            placeholder="Masukkan alamat lengkap"
            error={errors.alamat}
            multiline
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Daftar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset Form</Text>
          </TouchableOpacity>

          {submitted && (
            <View style={styles.successBox}>
              <Text style={styles.successText}>
                ✅ Form berhasil disubmit!
              </Text>
            </View>
          )}

          <View style={{ height: 50 }} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#7f8c8d',
    fontSize: 16,
  },
  successBox: {
    backgroundColor: '#d5f4e6',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  successText: {
    color: '#27ae60',
    fontWeight: '600',
  },
});