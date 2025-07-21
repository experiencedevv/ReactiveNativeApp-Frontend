import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        
        {/* Acesso público */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Cadastro', headerShown: false }}
        />

        {/* Postagens */}
        <Stack.Screen name="PostsList" component={PostsList} options={{ title: 'Postagens' }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ title: 'Detalhes do Post' }} />
        <Stack.Screen name="PostCreate" component={PostCreate} options={{ title: 'Novo Post' }} />
        <Stack.Screen name="PostEdit" component={PostEdit} options={{ title: 'Editar Post' }} />

        {/* Professores */}
        <Stack.Screen name="TeacherList" component={TeacherList} options={{ title: 'Professores' }} />
        <Stack.Screen name="TeacherEdit" component={TeacherEdit} options={{ title: 'Editar Professor' }} />

        {/* Estudantes */}
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'Estudantes' }} />
        <Stack.Screen name="StudentEdit" component={StudentEdit} options={{ title: 'Editar Estudante' }} />

        {/* Admin */}
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: 'Administração' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}









