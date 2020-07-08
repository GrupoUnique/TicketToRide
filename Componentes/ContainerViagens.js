import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';
import ButtonViagem from './ButtonViagem.js';

const ContainerViagens = props => {
    return(
        <View>
            <ScrollView  horizontal={true} style={{
                paddingTop:5,
                width:props.width,
                height:props.heigth,
                margin:props.margin,}}>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('../assets/maldivas.jpeg')} texto={'Maldivas'} navigator={props.navigator}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('../assets/saopaulo.jpg')} texto={'São Paulo'} navigator={props.navigator}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('../assets/riodejaneiro.jpg')} texto={'Rio de Janeiro'} navigator={props.navigator}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('../assets/salvador-ba.jpg')} texto={'Salvador'} navigator={props.navigator}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('../assets/paraiso.jpg')} texto={'Paraíso'} navigator={props.navigator}/>
            </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    }
);

export default ContainerViagens;
