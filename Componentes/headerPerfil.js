import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class HeaderPerfil extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/beiçola.jpg')} style={styles.img}/>
                <View style={styles.containerText}>
                    <Text>Aula do melhor professor da fatec</Text>                
                    <Text>professor.rogerio@lindo.com</Text>     
                </View>
            </View>
        );
    };
}


const styles = StyleSheet.create({
        container:{
            top:0,
            left:0,
            width:'100%',
            height:'15%',
            shadowColor:'black',
            flexDirection:'row',
            borderBottomColor:'#dedede',
            borderBottomWidth:1,
            alignItems:'center',
        },
        img:{
            height:'70%',
            width:'20%',
            marginHorizontal:'3%',
            borderRadius:10,
        },
        containerText:{
            alignItems:'flex-start',
        },
    }
); 