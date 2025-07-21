import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';

export default function StudentList() {
  const navigation = useNavigation();

  const [usuarios, setUsuario] = useState([])

  // get all
  useEffect(()=>{
    axios.get("http://localhost:3000/usuario").then((response)=>{
        setUsuario(response.data)})

  },[])


  const listaAluno = usuarios.filter((aluno) => aluno.tipoUsuario == "Estudante")






  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <Text style={styles.title}>Lista de Alunos</Text>
          <TouchableOpacity
            style={styles.cadastrarButton}
            onPress={() => navigation.navigate('StudentCreate')}
          >
            <Text style={styles.cadastrarText}>Cadastrar Aluno</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Nome</Text>
            <Text style={styles.tableHeaderCell}>E-mail</Text>
          </View>


          {listaAluno.map((aluno) => (
            <View key={aluno.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{aluno.nome}</Text>
              <Text style={styles.tableCell}>{aluno.email}</Text>
            </View>
            
          ))}
        </View>

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
  voltar: {
    alignSelf: 'flex-start',
    marginTop: 24,
    marginBottom: 16,
    marginLeft: '5%',
    color: '#000',
  },
  headerRow: {
    width: '90%',
    maxWidth: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cadastrarButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cadastrarText: {
    color: '#000',
  },
  table: {
    width: '90%',
    maxWidth: 800,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableCell: {
    flex: 1,
    color: '#333',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});
