import React from "react";
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

export default function Logout () {
    return(
    <SafeAreaView style= {styles.container}>
        <TouchableOpacity style= {styles.opacity}>
        <Text style={{ color: '#000000', textAlign: 'center', textAlignVertical: 'center', }}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
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
        height: 50,
        borderRadius: 50,
    }
});