import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AdminMenu from '../components/AdminMenu';
import PostCard from '../components/PostCard';
import { useAuth } from '../contexts/AuthContext';

export default function AdminDashboard() {
  const { user, token } = useAuth();
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (!user || user.perfil !== 'professor') {
        Alert.alert('Acesso negado', 'Apenas professores têm acesso a esta área.');
        navigation.replace('Login');
        return;
      }

      const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/posts', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPosts(response.data);
        } catch (error) {
          console.error('Erro ao buscar posts:', error);
          Alert.alert('Erro', 'Não foi possível carregar os posts.');
        }
      };

      fetchPosts();
    }, [user, token])
  );

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Painel do Professor</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PostCreate')}
            >
              <Text style={styles.buttonText}>Novo Post</Text>
            </TouchableOpacity>
          </View>

          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post._id}
                idCampo={post._id}
                titulo={post.titulo}
                descricao={post.descricao}
                exibirControles
              />
            ))
          ) : (
            <Text style={styles.noPosts}>Nenhum post cadastrado.</Text>
          )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  noPosts: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});





