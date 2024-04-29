import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function SettingsTitle () {
    return (
        <View style ={styles.containter}>
            <Text style= {styles.text}>Settings</Text>
        </View>
    
    )
}
const styles = StyleSheet.create({
    containter:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 0,
    },
    text: {
        fontSize: 20,
        alignItems: "center",
        marginTop: 60
    }
});

