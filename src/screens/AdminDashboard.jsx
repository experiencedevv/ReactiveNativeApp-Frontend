import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import styles from './AdminMenu.styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function AdminMenu() {
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

  const menuItems = [
    { title: 'Home', route: 'AdminDashboard' },
    { title: 'Professores', route: 'TeacherList' },
    { title: 'Estudantes', route: 'StudentList' },
  ];

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
                {menuItems.map((item) => (
                  <TouchableOpacity
                    key={item.route}
                    onPress={() => {
                      setMenuVisible(false);
                      navigation.navigate(item.route);
                    }}
                    style={styles.modalItem}
                  >
                    <Text style={styles.modalText}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={handleLogout} style={styles.modalItem}>
                  <Text style={styles.modalText}>Sair</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <View style={styles.links}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.route} onPress={() => navigation.navigate(item.route)}>
              <Text style={styles.link}>{item.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.link}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}




