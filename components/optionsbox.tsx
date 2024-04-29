import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Text, StyleSheet, View } from "react-native";

export default function OptionsBox () {
    return(
    <View style= {styles.container}>
        <Text style={styles.text}>Account</Text>
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/>

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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexShrink: 1,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: 350,
        height:400,
    },
    opacity:{
        backgroundColor: '#f0f2ff',
        width:300,
        height: 30,
        borderRadius: 50,
    },
    text:{
        flex: 0.8,
        flexDirection: 'row',
        color: '#000000',
        lineHeight: 32,
        paddingVertical:6,
        flexWrap:'wrap',

    },
    icon:{
        display:'flex',
    }
});