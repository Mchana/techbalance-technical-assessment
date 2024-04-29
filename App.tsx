import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsTitle from './components/settingstitle';
import Lefticon from './components/lefticon';
import Logout from './components/logout';
import OptionsBox from './components/optionsbox';

//const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
    <View style={styles.container}>
      <SettingsTitle></SettingsTitle>
      <Lefticon ></Lefticon>
      <OptionsBox></OptionsBox>
      <Logout></Logout>

    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7e2f4',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
