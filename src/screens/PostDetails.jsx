import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StudentMenu from '../components/StudentMenu';
import { useAuth } from '../contexts/AuthContext';
import styles from './PostDetails.styles';

export default function PostDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { perfil } = useAuth();

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


