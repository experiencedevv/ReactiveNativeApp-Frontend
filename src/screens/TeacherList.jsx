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

export default function TeacherList() {
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

  const excluirProfessor = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/usuario/${id}`);
      carregarUsuarios();
    } catch (error) {
      Alert.alert('Erro ao excluir professor', 'Verifique a conexão ou tente novamente.');
      console.error(error);
    }
  };

  const listaProfessores = usuarios.filter((usuario) => usuario.perfil === 'professor');

  return (
    <View style={styles.container}>
      <AdminMenu />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Lista de Professores</Text>
          <TouchableOpacity
            style={styles.cadastrarButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.cadastrarText}>Cadastrar Professor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Nome</Text>
            <Text style={styles.tableHeaderCell}>E-mail</Text>
            <Text style={styles.tableHeaderCellAcoes}>Ações</Text>
          </View>

          {listaProfessores.map((professor) => (
            <View key={professor._id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{professor.nome}</Text>
              <Text style={styles.tableCell}>{professor.email}</Text>
              <View style={styles.acoes}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TeacherEdit', { id: professor._id })}
                >
                  <Text style={styles.acaoEditar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => excluirProfessor(professor._id)}>
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


