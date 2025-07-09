import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import UserForm from '../components/UserForm';
import { atualizarUsuario } from '../services/api';
import styles from './StudentEdit.styles';

export default function StudentEdit() {
  const route = useRoute();
  const { nome, email, id } = route.params || {};

  const [initialData] = useState({ nome, email });

  const handleSubmit = (data) => {
    atualizarUsuario(id, data);
    console.log('Aluno atualizado:', data);
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <UserForm
          titulo="Editar Aluno"
          onSubmit={handleSubmit}
          initialData={initialData}
        />
        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}


