import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import { atualizarPost } from '../services/api';

export default function PostEdit() {
  const navigation = useNavigation();
  const route = useRoute();
  const {idCampo: initialId, titulo: initialTitulo, descricao: initialDescricao } = route.params || {};

  const [id, setId] = useState(initialId || '');
  const [titulo, setTitulo] = useState(initialTitulo || '');
  const [descricao, setDescricao] = useState(initialDescricao || '');

  const handleSalvar = (id) => {
    const dados = {titulo,descricao}
    // Aqui você pode integrar com sua API futuramente
    atualizarPost(id,dados)
    Alert.alert('Post atualizado com sucesso!');
    navigation.goBack(null);
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Editar Post</Text>

          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o título"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={styles.textarea}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Digite a descrição"
            placeholderTextColor="#999"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button} onPress={() => handleSalvar(initialId)}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
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
    paddingBottom: 40,
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  voltar: {
    color: '#000',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
  textarea: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    height: 150,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});

