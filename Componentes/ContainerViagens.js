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
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')} texto={'Maldivas'}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')} texto={'Maldivas'}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')} texto={'Maldivas'}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')} texto={'Maldivas'}/>
                <ButtonViagem width={170} heigth={props.heigth - 15} imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')} texto={'Maldivas'}/>
            </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    }
);

export default ContainerViagens;