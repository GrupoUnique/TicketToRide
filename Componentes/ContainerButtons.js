import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';
import Buttons from './Buttons.js';

const ContainerButtons = props => {
    return(
        <View style={{width:props.width,
                height:props.height,
                marginHorizontal:props.margin,
                marginTop:props.top,
                flexDirection:"row",
                borderRadius:10,}}>
            <View style={styles.ContencaoBig}>
                <Buttons width={'100%'} height={'100%'} imagem={require('../assets/festa.png')} color={'#ff63c4'} style={{marginTop:7}} text={'Baladas'} ImgWidth={45} ImgHeight={45} fonte={16} fontColor={'white'} navigator={props.navigator}/>
            </View>
            <View style={styles.ContencaoVerticais}>
                <View style={styles.ContencaoB1}>
                    <Buttons width={'49%'} height={'90%'} imagem={require('../assets/nature.png')} color={'#8fff40'} style={{marginTop:7}} text={'Natureza'} ImgWidth={35} ImgHeight={35} fonte={15} fontColor={'white'} navigator={props.navigator}/>
                    <Buttons width={'49%'} height={'90%'} imagem={require('../assets/snow.png')} color={'#69ebff'} style={{marginTop:7}} text={'Frio'} ImgWidth={30} ImgHeight={30} fonte={15} fontColor={'white'} navigator={props.navigator}/>
                </View>
                <View style={styles.ContencaoB2}>
                    <Buttons width={'49%'} height={'90%'} imagem={require('../assets/montanha.png')} color={'#ffaf24'} style={{marginTop:7}} text={'Montanha'} ImgWidth={25} ImgHeight={25} fonte={15} fontColor={'white'} navigator={props.navigator}/>
                    <Buttons width={'49%'} height={'90%'} imagem={require('../assets/umbrella.png')} color={'#ffef45'} style={{marginTop:7}} text={'Praias'} ImgWidth={30} ImgHeight={30} fonte={15} fontColor={'white'} navigator={props.navigator}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
        ContencaoBig:{
            top:0,
            left:0,
            height:'100%', 
            width:'32%',
            borderRadius:10,
            alignItems:'center',
        },
        ContencaoVerticais:{
            top:0,
            right:0,
            height:'100%',
            width:'68%',
            borderRadius:10,
            paddingLeft:3,
            marginLeft:5,
            justifyContent:'space-between',
        },
        ContencaoB1:{
            height:'48%',
            width:'100%',
            flexDirection:'row',
            borderRadius:10,
            justifyContent:'space-between',
            alignItems:'center',
        },
        ContencaoB2:{
            height:'48%',
            width:'100%',
            flexDirection:'row',
            borderRadius:10,
            marginTop:3,
            justifyContent:'space-between',
            alignItems:'center',
        },
    }
);


export default ContainerButtons;
