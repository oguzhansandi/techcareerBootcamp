import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomePage'
import AddUserPage from '../screens/AddUserPage'
import UserListPage from '../screens/UserListPage'

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>    
            <Stack.Screen name='AddUser' component={AddUserPage}/>    
            <Stack.Screen name='UserList' component={UserListPage}/>    
        </Stack.Navigator>      
    </NavigationContainer>
  )
}

export default AppNavigator;