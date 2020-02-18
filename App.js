import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable} from 'react-native';
//import Coiso from "./Componentes/Coiso";// <Coiso title="Coiso"/>
//Touchable contem onLongPress, eu posso contornar a view com ele para que ela fique clicavel, touchable opacity muda a opacidade do elemento quando é clicado
//import ViewObj from "./Componentes/ViewObj";
//ScrollViews podem ser uteis, mas elas renderizam tudo, até oq n esta na tela e por isso a flatList pode Acabar sendo melhor
/* FlatList precisa que quando vc va declarar oq vc quer dentro  */
//Dar uma olhada na funcao filter dos arrays
import Nav from './Componentes/Footer.js';
import TelaHome from './Componentes/TelaHome.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';
export default function App() {
  return (
    <View style={styles.container}>
       <Nav/>
    </View>
  );
}


const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    marginTop:30,
  },
});
