import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';





export default function PostCard({ idCampo, titulo, descricao, isAdminView = false, aoDeletar }) {
  const navigation = useNavigation();

  const handleDeletar = (idCampo) => {
    aoDeletar(idCampo)
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>{descricao}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('PostDetails', {
          idCampo,
          titulo,
          descricao
        })}
      >
        <Text style={styles.readMore}>Ler mais</Text>
      </TouchableOpacity>

      {isAdminView && (
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('PostEdit', {
              idCampo,
              titulo,
              descricao
            })}
          >
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            //onPress={() => alert("pegar o id do post e colocar na API")}
            onPress={() => handleDeletar(idCampo)}
          >
            <Text style={styles.deleteText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  readMore: {
    fontSize: 14,
    color: '#000',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  editButton: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editText: {
    color: '#fff',
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  deleteText: {
    color: '#000',
  },
});

