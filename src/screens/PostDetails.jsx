import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StudentMenu from '../components/StudentMenu';
import { useAuth } from '../contexts/AuthContext';

export default function PostDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { perfil } = useAuth();

  // Recupera os dados do post passado via navegação
  const { titulo, descricao } = route.params || {};

  return (
    <View style={styles.container}>
      <StudentMenu />
      

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{titulo || 'Título não disponível'}</Text>

          <Text style={styles.body}>{descricao || 'Conteúdo não disponível.'}</Text>
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
  body: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});


