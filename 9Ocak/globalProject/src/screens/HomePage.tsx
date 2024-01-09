import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View  style={styles.container}>
      <View style = {styles.inner_container}>
        <Pressable onPress={() =>{
          navigation.navigate('AddUser');
        }}>
          <Text style= {styles.text}>Add User</Text>
        </Pressable>
      </View>
      <View style = {styles.inner_container}>
        <Pressable onPress={() =>{
          navigation.navigate('UserList');
        }}>
          <Text style= {styles.text}>Users List</Text>
        </Pressable> 
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
  },
  inner_container:{
    marginRight : 10,
    backgroundColor : 'blue',
    padding : 10,
  },
  text : {
    color : '#fff',
    fontSize : 25,
  }
})