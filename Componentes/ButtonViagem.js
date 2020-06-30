import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';

const ButtonViagem = props =>{
    return (
        <View style={{alignItems:'center',
                        width:props.width,
                        height:props.heigth,}}>
            <TouchableOpacity style={{width:props.width - 20,
                                      heigth:'80%',
                                        alignItems:"center",
                                        paddingTop:15,
                                        shadowRadius:2}} onPress={ () => props.navigator.navigate("Compra")}>
                <Image source={props.imagem} style={styles.Img}/>
            </TouchableOpacity>
            <Text style={styles.Texto}>{props.texto}</Text>
        </View>
    );

};


const styles = StyleSheet.create({
    Img:{
        borderRadius:10,
        width:'90%',
        height:'90%',
    },
    Texto:{
        fontSize:18,
        //fontFamily:'Century Gothic',
    }
});


export default ButtonViagem;