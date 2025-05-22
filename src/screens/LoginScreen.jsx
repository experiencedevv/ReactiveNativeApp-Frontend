import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState('Estudante'); // valor inicial
  const { login } = useAuth();

  const handleLogin = () => {
    login(perfil); // simula login com o tipo selecionado

    if (perfil === 'Professor') {
      navigation.replace('AdminDashboard');
    } else {
      navigation.replace('PostsList');
    }
  };

  const alternarPerfil = () => {
    setPerfil((prev) => (prev === 'Estudante' ? 'Professor' : 'Estudante'));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../../assets/logo-learnplus.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity onPress={alternarPerfil}>
            <Text style={styles.perfilToggle}>Perfil: {perfil} (toque para alternar)</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
              <Text style={styles.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.secondaryButtonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 160,
    height: 40,
    marginBottom: 40,
  },
  card: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    padding: 24,
    alignItems: 'stretch',
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 24,
    color: '#000',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  perfilToggle: {
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  secondaryButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  footer: {
    marginTop: 40,
    fontSize: 12,
    color: '#888',
  },
});




