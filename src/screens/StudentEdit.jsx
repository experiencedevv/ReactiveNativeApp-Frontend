import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import UserForm from '../components/UserForm';

export default function StudentEdit() {
  const route = useRoute();
  const { nome, email } = route.params || {};

  const [initialData] = useState({ nome, email });

  const handleSubmit = (data) => {
    console.log('Aluno atualizado:', data);
    // Aqui você poderá chamar uma API para atualizar o aluno
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




