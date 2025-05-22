import React, { useState, useCallback } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import PostCard from '../components/PostCard';
import StudentMenu from '../components/StudentMenu';

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
              id={post._id}
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
    height: width / 3, // altura proporcional para 1440x480
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});



