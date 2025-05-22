import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingBottom: 40,
    marginTop: 32,
  },
  card: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});
