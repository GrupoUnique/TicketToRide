import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity,} from 'react-native';

export default function Splash ({navigation}){
    setTimeout(()=> navigation.navigate("Login"), 5000);
    return(
        <View style={styles.container}>
            <Image style={styles.imgs} source={require('../assets/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    imgs:{
        height:300,
        width:300,
    },
})

