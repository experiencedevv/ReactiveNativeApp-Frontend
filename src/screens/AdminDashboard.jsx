import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AdminMenu from '../components/AdminMenu';
import PostCardProfessor from '../components/PostCardProfessor.jsx';
import { deletarPost } from '../services/api';

export default function AdminDashboard() {
  const navigation = useNavigation();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((response) => {
      setPost(response.data);
    });
  }, []);

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
            <PostCardProfessor
              key={post._id}
              idCampo={post._id}
              titulo={post.titulo}
              descricao={post.descricao}
              aoDeletar={(id) => deletarPost(id)}
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














