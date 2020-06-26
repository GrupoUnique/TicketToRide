import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable} from 'react-native';
import HeaderPerfil from './headerPerfil.js';
import ButtonPesquisa from './ButtonPesquisa.js';

export default class TelaPerfil extends Component{
    state={
        lugares:['a','b','c','d'],
    };
    render(){
        return(
            <View style={styles.Container}>
                <HeaderPerfil/>
                <FlatList style={{backgroundColor:'white'}}data={this.state.lugares} renderItem={({item}) => <ButtonPesquisa imagem={require('./assets/maldivas.jpeg')}/>}/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    Container:{
        flex:9 ,
        alignItems:'center',
        backgroundColor:'white',
    },
});
