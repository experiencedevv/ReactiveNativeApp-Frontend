import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PostCard from '../components/PostCard';
import StudentMenu from '../components/StudentMenu';
import axios from 'axios';

export default function PostsList() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((response) => {
      setPost(response.data);
    });
  }, []);

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

          <Text style={styles.footer}>©️ 2025 by LearnPlus</Text>
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
  banner: {
    width: '100%',
    height: width / 3, // mantém a proporção
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









