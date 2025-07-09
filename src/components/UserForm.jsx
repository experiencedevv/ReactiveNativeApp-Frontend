import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './UserForm.styles';

export default function UserForm({ titulo, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastrar = () => {
    if (!nome || !email) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    onSubmit({ nome, email });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>{titulo}</Text>

        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome completo"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
