import React , {Component}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity,} from 'react-native';

import {Actions} from 'react-native-router-flux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function TelaLogin ({navigation}){
        
        return(
            <View style={styles.containerPrincipal}>
                <View style={styles.container}>
                    <Image style={styles.imgs} source={require('/home/yuri/mais_um/assets/logo.png')}/>
                    <TextInput style={styles.input} placeholder={'Usuario'} onSubmitEditing={() => this.passwordInput.focus()}/>
                    <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry ref={(input) => this.passwordInput = input}/>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.textos}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={styles.textos}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
     }

const styles = StyleSheet.create({ 
        containerPrincipal:{
            flex:1,
            alignItems:"center",
            backgroundColor:"white",
            justifyContent:"center",
        },
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center", 
            width:'90%',
        },
        imgs:{
            height:260,
            width:260,
        },
        input:{
            width:'90%',
            borderColor:'black',
            borderWidth:1,
            borderRadius:5,
            padding:10,
            height:40,
            marginTop:10,
        },
        botao:{
            marginTop:10,
            backgroundColor:'#f7cf3e',
            borderRadius:7,
            width:'40%',
            alignContent:'center',
            alignItems:'center',
        },
        textos:{
            fontSize:18,
        }
    }
);