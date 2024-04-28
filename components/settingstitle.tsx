import { FunctionComponent } from "react";
import { Text, StyleSheet, View } from "react-native";

const SettingsTitle: FunctionComponent = () => {
    return (
    <View style = {styles.top}>
        <Text style= {styles.text}>Settings</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    top: {
        padding: 20,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    }
});

export default SettingsTitle;