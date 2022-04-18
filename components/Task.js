import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const Task=(props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity>
               <View style={styles.circular}>
                   <Text style={styles.xtext}>
                       X
                   </Text>
               </View>
            </TouchableOpacity>
        </View>
    ) 
}
const styles= StyleSheet.create({
    item: {
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        justifyContent:'space-between'
        
    },
    itemLeft: {
       flexDirection:'row',
       alignItems:'center',
       flexWrap:'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    circular: {
        width:20,
        height:20,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },
    itemText:{
        maxWidth:'80%'
    },
    xtext:{
        color:'red',
        fontWeight:'bold',
        paddingStart:3.5,
        bottom:2,
    }
});


export default Task;