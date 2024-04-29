import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function OptionsBox () {
    return(
    <View style= {styles.container}>
        <Text style={styles.text}>Account</Text>
        <Text style={styles.text}>Notifications</Text>
        <Text style={styles.text}>Help & Support</Text>
        <Text style={styles.text}>Privacy Policy</Text>
        <Text style={styles.text}>Terms & Conditions</Text>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacity:{
        backgroundColor: '#f0f2ff',
        width:300,
        height: 30,
        borderRadius: 50,
    },
    text:{
        color: '#000000',
    }
});