import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import { atualizarPost } from '../services/api';
import styles from './PostEdit.styles';

export default function PostEdit() {
  const navigation = useNavigation();
  const route = useRoute();
  const { idCampo: initialId, titulo: initialTitulo, descricao: initialDescricao } = route.params || {};

  const [id, setId] = useState(initialId || '');
  const [titulo, setTitulo] = useState(initialTitulo || '');
  const [descricao, setDescricao] = useState(initialDescricao || '');

  const handleSalvar = (id) => {
    const dados = { titulo, descricao };
    atualizarPost(id, dados);
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


