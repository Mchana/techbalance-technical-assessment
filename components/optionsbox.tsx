import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Text, StyleSheet, View } from "react-native";

export default function OptionsBox () {
    return(
    <View style= {styles.container}>
        <View>
        <Text style={styles.text}>Account
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </View>
        
        <View>
        <Text style={styles.text}>Notifications
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </View>
        
        <View>
        <Text style={styles.text}>Help & Support
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </View>
        
        <View>
        <Text style={styles.text}>Privacy Policy
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </View>

        <View>
        <Text style={styles.text}>Terms & Conditions
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        flexDirection:'column',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: 350,
        height:200,
    },
    text:{
        flexGrow:1,
        flexShrink:1,
        paddingLeft:8,
        alignItems: 'center',
        color: '#000000',
        lineHeight: 32,
        padding:'auto',

    },
    icon:{
        flexDirection:'row',
        marginRight: 50,
    },

});