import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable} from 'react-native';
import HeaderPerfil from './headerPerfil.js';
import ButtonPesquisa from './ButtonPesquisa.js';

export default function TelaPerfil ({navigation}) {
    const [lugares, setLugares] = useState(['a','b','c','d']);
    return(
            <View style={styles.Container}>
                <HeaderPerfil/>
                <FlatList style={{backgroundColor:'white'}}data={lugares} renderItem={({item}) => <ButtonPesquisa imagem={require('../assets/maldivas.jpeg')} navigator={navigation} screen={"Qr"}/>}/>
            </View>
        )
};

const styles = StyleSheet.create({
    Container:{
        flex:9 ,
        alignItems:'center',
        backgroundColor:'white',
    },
});
