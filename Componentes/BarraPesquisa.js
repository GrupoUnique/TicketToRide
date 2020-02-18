import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable, Image} from 'react-native';
import { connection } from 'mongoose';

const valor = ''; 
export default class InputText extends Component{
    returnVal(){
        return valor;
    }
    setar = text => {
        valor = text;
        console.log(valor);
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.imgs} source={require('/home/yuri/mais_um/assets/search.png')}/>
                <TextInput style={{flex:1}} onChangeText={{valor = text}}/>
                <Image style={styles.imgs} source={require('/home/yuri/mais_um/assets/search.png')}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            backgroundColor:'white',
            width:'100%',
            height:'30',
        },  
        imgs:{
            height:'100%',
            width:'7%',
        }
    }
);