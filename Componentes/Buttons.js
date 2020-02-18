import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';


 const Buttons = props => {
    return(
        <View style={{borderRadius:10,
                     width:props.width,
                     height:props.height,
                     backgroundColor:props.color,
                     flexDirection:'row',
                     justifyContent:'space-between',
                     }}>
                         
            <TouchableOpacity style={styles.botao}>  
            <Image
                style={{width: props.ImgWidth, height: props.ImgHeight}}
                source={props.imagem}
            />
            <Text style={{fontSize:props.fonte, color:props.fontColor}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    botao:{
        flex:1,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:'center',
        shadowRadius:10,
    },
});

export default Buttons;