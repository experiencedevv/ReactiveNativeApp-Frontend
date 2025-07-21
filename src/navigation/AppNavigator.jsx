// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../contexts/AuthContext';

// Telas públicas
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// Telas de postagens
import PostCreate from '../screens/PostCreate';
import PostDetails from '../screens/PostDetails';
import PostEdit from '../screens/PostEdit';
import PostsList from '../screens/PostsList';

// Telas de professores
import TeacherEdit from '../screens/TeacherEdit';
import TeacherList from '../screens/TeacherList';

// Telas de estudantes
import StudentEdit from '../screens/StudentEdit';
import StudentList from '../screens/StudentList';

// Painel administrativo
import AdminDashboard from '../screens/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            {/* Acesso irrestrito após login */}
            <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
            <Stack.Screen name="PostCreate" component={PostCreate} />
            <Stack.Screen name="PostEdit" component={PostEdit} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
            <Stack.Screen name="PostsList" component={PostsList} />
            <Stack.Screen name="TeacherList" component={TeacherList} />
            <Stack.Screen name="TeacherEdit" component={TeacherEdit} />
            <Stack.Screen name="StudentList" component={StudentList} />
            <Stack.Screen name="StudentEdit" component={StudentEdit} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}




