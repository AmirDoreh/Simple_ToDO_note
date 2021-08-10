import React, { useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NotesScreen from '../screens/NotesScreen';
import AddNoteScreen from '../screens/AddNoteScreen';


const RootStack = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
  }, [])
  
  return <>
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name={'NotesScreen'} component={NotesScreen} />
        <Stack.Screen name={'AddNoteScreen'} component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default RootStack