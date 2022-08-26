import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


async function main() {
  await app.listen(27017);
  console.log('conectado');
}
const { mongoose } = require('./database.js');
//require('./database');
const Stack = createStackNavigator()


import UserList from './Screams/UserList'
import CreateUserScream from './Screams/CreateUserScream'
import UserDetailScream from './Screams/UserDetailScreem'


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="CreateUser" component={CreateUserScream} />

      <Stack.Screen name="DetailUser" component={UserDetailScream} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
