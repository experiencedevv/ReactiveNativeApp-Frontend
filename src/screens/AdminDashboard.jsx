import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useCallback } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import PostCard from '../components/PostCard';
import { deletarPost } from '../services/api';

export default function AdminDashboard() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  const carregarPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarPosts();
    }, [])
  );

  const aoDeletar = async (id) => {
    try {
      await deletarPost(id);
      await carregarPosts(); // recarrega após exclusão
    } catch (error) {
      Alert.alert('Erro ao deletar', 'Não foi possível excluir o post.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../../assets/banner-admin.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Lista de Posts</Text>
            <TouchableOpacity
              style={styles.newPostButton}
              onPress={() => navigation.navigate('PostCreate')}
            >
              <Text style={styles.newPostText}>+ Novo Post</Text>
            </TouchableOpacity>
          </View>

          {posts.map((post) => (
            <PostCard
              key={post._id}
              idCampo={post._id}
              titulo={post.titulo}
              descricao={post.descricao}
              isAdminView
              aoDeletar={aoDeletar}
            />
          ))}
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
  banner: {
    width: width,
    height: width / 3,
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newPostButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  newPostText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});



