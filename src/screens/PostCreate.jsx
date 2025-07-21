import { useNavigation } from '@react-navigation/native';
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
import { WebView } from 'react-native-webview';
import { cadastrarPost } from '../services/api';
import AdminMenu from '../components/AdminMenu';

export default function PostCreate() {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      await cadastrarPost({ titulo, descricao });
      Alert.alert('Sucesso', 'Post criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao criar post:', error);
      Alert.alert('Erro', 'Não foi possível criar o post. Tente novamente.');
    }
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

        <View style={styles.chatContainer}>
          <WebView
            source={{
              html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js"></script>
                  </head>
                  <body style="margin:0;padding:0;">
                    <langflow-chat
                      window_title="ChatBot - langflow"
                      flow_id="d4f669f9-becb-464b-8e77-7be9463af8db"
                      host_url="https://astra.datastax.com">
                    </langflow-chat>
                  </body>
                </html>
              `,
            }}
            originWhitelist={['*']}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
          />
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { alignItems: 'center', paddingBottom: 40 },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  voltar: { color: '#000', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  label: { fontSize: 14, marginBottom: 6, color: '#000' },
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
  buttonText: { color: '#fff', fontWeight: '600' },
  chatContainer: {
    width: '90%',
    height: 400,
    marginTop: 30,
    maxWidth: 800,
  },
  footer: { fontSize: 12, color: '#999', marginTop: 40 },
});



