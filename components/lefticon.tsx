import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Text, StyleSheet, View } from "react-native";

export default function Lefticon () {
    return (
        <View style= {styles.icon}>
        <AntDesign name="arrowleft" size={24} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
});