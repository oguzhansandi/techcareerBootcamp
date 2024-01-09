import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useContext } from 'react';
import { UsersListContext, UsersListContextType } from '../context/UserContext';

const UserListPage = () => {
  
  const {usersList} = useContext(UsersListContext) as UsersListContextType

  return (
    <>
      <View>
        {usersList.map((user, index) => <Text key={index} style={styles.usersText}>{user}</Text>)}  
      </View>
    </>
  );
};

export default UserListPage;

const styles = StyleSheet.create({
  usersText : {
    fontSize : 30,
    fontWeight : 'bold',
  }
});