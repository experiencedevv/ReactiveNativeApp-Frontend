import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';

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

const styles = StyleSheet.create({
  // ... estilos iguais aos anteriores, mantendo scroll, headerRow, etc.
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { alignItems: 'center', paddingBottom: 40 },
  headerRow: {
    width: '90%',
    maxWidth: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 24,
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  cadastrarButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cadastrarText: { color: '#000' },
  table: { width: '90%', maxWidth: 800 },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
  },
  tableHeaderCell: { flex: 2, fontWeight: 'bold' },
  tableHeaderCellAcoes: { flex: 1, fontWeight: 'bold', textAlign: 'center' },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  tableCell: { flex: 2, color: '#333' },
  acoes: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  acaoEditar: { color: '#007AFF', fontWeight: '600' },
  acaoExcluir: { color: '#FF3B30', fontWeight: '600' },
  footer: { fontSize: 12, color: '#999', marginTop: 40 },
});
