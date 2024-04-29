import React from 'react';
import { StyleSheet, View} from 'react-native';
import SettingsTitle from './components/settingstitle';
import Lefticon from './components/lefticon';
import Logout from './components/logout';

export default function App() {
  return(
    <View style={styles.container}>
      <SettingsTitle></SettingsTitle>
      <Lefticon ></Lefticon>
      <Logout></Logout>
    </View>
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
