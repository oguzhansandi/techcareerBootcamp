import { View, Text, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { UsersListContext, UsersListContextType } from '../context/UserContext';

const AddUserPage: React.FC = () => {
  const [text, setText] = useState('');
  const {usersList, setUsersList} = useContext(UsersListContext) as UsersListContextType
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.InputText}  
        onChangeText={setText}
        placeholder='İsim Giriniz.'
      />
      <View style={styles.btnContainer}>
        <Pressable 
          style={styles.btn} 
          onPress={()=> setUsersList([...usersList, text])}
        >
          <Text style={styles.btnText}>Add User</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddUserPage;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    margin : 10
  },
  InputText:{
    borderWidth : 1,
    marginTop : 10,
  },
  btnContainer : {
    alignItems : 'center',
  },
  btn:{
    marginTop : 10,
    alignItems : 'center',
    borderWidth : 1,
    padding : 5,
    backgroundColor : 'blue',
    width : '50%',
  },
  btnText : {
    color: '#fff',
  }
});