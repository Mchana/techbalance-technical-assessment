import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import {StyleSheet, View } from "react-native";

export default function Lefticon () {
    return (
        <View style= {styles.container}>
        <AntDesign style= {[styles.icon]} name="arrowleft" size={24} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:0,
        left:0,
    },
    icon:{
        marginTop: 10,
        marginLeft: 10,
    }
});