import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import styles from './StudentList.styles';

export default function StudentList() {
  const navigation = useNavigation();
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuario');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const excluirAluno = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/usuario/${id}`);
      carregarUsuarios();
    } catch (error) {
      Alert.alert('Erro ao excluir aluno', 'Verifique a conexão ou tente novamente.');
      console.error(error);
    }
  };

  const listaAluno = usuarios.filter((aluno) => aluno.perfil === 'aluno');

  return (
    <View style={styles.container}>
      <AdminMenu />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Lista de Alunos</Text>
          <TouchableOpacity
            style={styles.cadastrarButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.cadastrarText}>Cadastrar Aluno</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Nome</Text>
            <Text style={styles.tableHeaderCell}>E-mail</Text>
            <Text style={styles.tableHeaderCellAcoes}>Ações</Text>
          </View>

          {listaAluno.map((aluno) => (
            <View key={aluno._id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{aluno.nome}</Text>
              <Text style={styles.tableCell}>{aluno.email}</Text>
              <View style={styles.acoes}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('StudentEdit', { id: aluno._id })}
                >
                  <Text style={styles.acaoEditar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => excluirAluno(aluno._id)}>
                  <Text style={styles.acaoExcluir}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

