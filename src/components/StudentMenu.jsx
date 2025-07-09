import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import styles from './StudentMenu.styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function StudentMenu() {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [isMobile, setIsMobile] = useState(SCREEN_WIDTH < 600);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsMobile(window.width < 600);
    });
    return () => subscription?.remove();
  }, []);

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-learnplus-white.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {isMobile ? (
        <>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={menuVisible}
            onRequestClose={() => setMenuVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setMenuVisible(false)}
            >
              <View style={styles.modalMenu}>
                <TouchableOpacity
                  onPress={() => {
                    setMenuVisible(false);
                    navigation.navigate('PostsList');
                  }}
                  style={styles.modalItem}
                >
                  <Text style={styles.modalText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLogout}
                  style={styles.modalItem}
                >
                  <Text style={styles.modalText}>Sair</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <View style={styles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('PostsList')}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.link}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

