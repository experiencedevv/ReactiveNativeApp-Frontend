import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { cadastrarUsuario } from "../services/api.js";
import styles from './RegisterScreen.styles';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState('aluno');

  const handleRegister = async () => {
    try {
      const novoUsuario = { nome, email, senha, perfil };
      cadastrarUsuario(novoUsuario);
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Erro ao cadastrar', 'Verifique os dados e tente novamente.');
      console.error(error);
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

