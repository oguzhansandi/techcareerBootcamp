import React from 'react'
import { UserProvider, UsersListProvider } from './src/context/UserContext'
import AppNavigator from './src/navigation/AppNavigator'

const Router = () => {
  return (<>
    <UsersListProvider>
      <AppNavigator />      
    </UsersListProvider>
  </>
  )
}

export default Router