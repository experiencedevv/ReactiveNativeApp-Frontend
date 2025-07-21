import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import AdminMenu from '../components/AdminMenu';
import StudentMenu from '../components/StudentMenu';

export default function PostDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { perfil } = useAuth();

  // Recupera os dados do post passado via navegação
  const { titulo, descricao } = route.params || {};

  return (
    <View style={styles.container}>
      {perfil === 'aluno' ? <StudentMenu /> : <AdminMenu />}

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



