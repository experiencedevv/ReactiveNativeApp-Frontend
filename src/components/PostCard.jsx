import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './PostCard.styles';

export default function PostCard({ idCampo, titulo, descricao, isAdminView = false, aoDeletar }) {
  const navigation = useNavigation();

  const handleDeletar = (idCampo) => {
    aoDeletar(idCampo);
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
            onPress={() => handleDeletar(idCampo)}
          >
            <Text style={styles.deleteText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


