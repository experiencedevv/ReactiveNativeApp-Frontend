import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import { cadastrarPost } from '../services/api';
import styles from './PostCreate.styles';

export default function PostCreate() {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    if (!titulo || !descricao) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoPost = { titulo, descricao };
    cadastrarPost(novoPost);
    Alert.alert('Post criado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Novo Post</Text>

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

          <TouchableOpacity style={styles.button} onPress={handleSalvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}


