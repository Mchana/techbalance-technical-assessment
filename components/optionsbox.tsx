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
        flexShrink:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: '90%',
        height:200,
    },
    text:{
        //paddingLeft:10,
        flexDirection:'row',
        justifyContent:'flex-start',
        color: '#000000',
        lineHeight: 32,

    },
    icon:{
        //flexDirection:'row',
        //marginRight: 50,
        justifyContent:'flex-end'
    },

});