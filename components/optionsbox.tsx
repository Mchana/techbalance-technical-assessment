import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function OptionsBox () {
    return(
    <View style= {styles.container}>
        <View>
        <TouchableOpacity>
        <Text style={styles.text}>Account
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </TouchableOpacity>
        </View>
        
        <View>
        <TouchableOpacity>
        <Text style={styles.text}>Notifications
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </TouchableOpacity>
        </View>
        
        <View>
        <TouchableOpacity>
            <Text style={styles.text}>Help & Support
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </TouchableOpacity>
        </View>
        
        <View>
        <TouchableOpacity>
        <Text style={styles.text}>Privacy Policy
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity>
        <Text style={styles.text}>Terms & Conditions
        <AntDesign style= {[styles.icon]} name="right" size={24} color="black"/></Text>
        </TouchableOpacity>
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
        marginLeft: 5,
        color: '#000000',
        lineHeight: 32,
        fontSize:24,

    },
    icon:{
        //flexDirection:'row',
        //marginRight: 50,
        justifyContent:'flex-end'
    },

});