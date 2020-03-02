import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';


 export default class Buttons extends Component{
    render(){
        return(
            <View style={{borderRadius:10,
                         width:this.props.width,
                         height:this.props.height,
                         backgroundColor:this.props.color,
                         flexDirection:'row',
                         justifyContent:'space-between',
                         }}>
                             
                <TouchableOpacity style={styles.botao}>  
                <Image
                    style={{width: this.props.ImgWidth, height: this.props.ImgHeight}}
                    source={this.props.imagem}
                />
                <Text style={{fontSize:this.props.fonte, color:this.props.fontColor}}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
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