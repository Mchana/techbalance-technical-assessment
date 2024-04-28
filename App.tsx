import { StyleSheet, View} from 'react-native';
import SettingsTitle from './components/settingstitle';

export default function App() {
    <View style={styles.container}>
      <SettingsTitle></SettingsTitle>
    </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7e2f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
