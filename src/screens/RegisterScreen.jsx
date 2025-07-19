import { Picker } from '@react-native-picker/picker';
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
import { cadastrarUsuario } from "../services/api.js";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState('aluno');

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    try {
      const novoUsuario = { nome, email, senha, perfil };

      const response = await cadastrarUsuario(novoUsuario); // await incluído

      if (response?.status === 201 || response?.status === 200) {
        Alert.alert('Cadastro realizado com sucesso!');
        navigation.replace('Login');
      } else {
        throw new Error('Erro inesperado ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro ao cadastrar', error?.response?.data?.message || 'Tente novamente.');
    }
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
          <Text style={styles.title}>Cadastrar</Text>

          <Text style={styles.label}>Nome Completo:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

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

          <Text style={styles.label}>Perfil:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={perfil}
              onValueChange={(itemValue) => setPerfil(itemValue)}
              style={styles.picker}
              dropdownIconColor="#000"
            >
              <Picker.Item label="Estudante" value="aluno" />
              <Picker.Item label="Professor" value="professor" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleRegister}>
            <Text style={styles.secondaryButtonText}>Cadastrar</Text>
          </TouchableOpacity>
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
  pickerWrapper: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    marginBottom: 16,
  },
  picker: {
    height: 44,
    width: '100%',
    color: '#000',
  },
  secondaryButton: {
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 32,
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



