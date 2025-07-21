import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { loginUsuario } from '../services/api';
import ChatBot from '../components/chatBot';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const handleLogin = async () => {


    try {
      const login = { email, senha }
      const response = await loginUsuario(login);

      if (response?.status === 201 || response?.status === 200) {
        Alert.alert('Cadastro realizado com sucesso!');
        console.log("retorno do daddo de acesso",response.data.perfil)
        console.log("teste",response.data.perfil == 'professor')


        if (response.data.perfil == 'professor') {
          navigation.navigate("AdminDashboard");
        } else {
          navigation.replace('PostsList');
        }

      } else {
        Alert.alert('Erro no login')
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert('Erro no login', error.message || 'Tente novamente');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo */}
        <Image
          source={require('../../assets/logo-learnplus.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Card de login */}
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

          {/* Botões */}
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
      <ChatBot/>
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


















