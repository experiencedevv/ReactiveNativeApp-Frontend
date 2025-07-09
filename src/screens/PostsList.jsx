import React, { useState, useCallback } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import PostCard from '../components/PostCard';
import StudentMenu from '../components/StudentMenu';
import styles from './PostsList.styles';

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  const carregarPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarPosts();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StudentMenu />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../../assets/banner-admin.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Lista de Posts</Text>

          {posts.map((post) => (
            <PostCard
              key={post._id}
              idCampo={post._id}
              titulo={post.titulo}
              descricao={post.descricao}
            />
          ))}
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}




