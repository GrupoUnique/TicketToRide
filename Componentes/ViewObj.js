import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, TouchableOpacity,Modal} from 'react-native';

const ViewObject = props => {
    return(
        // style={styles.TextoApp}>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.TextoApp}>
            <Text style={{alignContent:'center'}}>{props.chave}</Text>
            <Text style={{alignContent:'center'}}>{props.value}</Text>
            <Button title="Excluir" onPress={props.method}/>
        </View>
        </TouchableOpacity>
       // 
    );
}
export default ViewObject;

const styles = StyleSheet.create({
    TextoApp:{
        backgroundColor:'#8bfcf7',
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'black',
        borderWidth:1,
        alignContent:'center',
        padding:10, //espacamento do conteudo dentro da coisa
        marginBottom:10,
        width:'90%'
      },



});