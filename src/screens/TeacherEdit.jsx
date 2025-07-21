import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import UserForm from '../components/UserForm';
import { atualizarUsuario } from '../services/api';

export default function TeacherEdit() {
  const route = useRoute();
  const { nome, email, id } = route.params || {};

  const [initialData] = useState({ nome, email });

  const handleSubmit = async (data) => {
    try {
      await atualizarUsuario(id, data);
      Alert.alert('Sucesso', 'Professor atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar professor:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o professor.');
    }
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <UserForm
          titulo="Editar Professor"
          onSubmit={handleSubmit}
          initialData={initialData}
        />
        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});


