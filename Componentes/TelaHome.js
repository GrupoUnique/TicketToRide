import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable} from 'react-native';
import ContainerButtons from './ContainerButtons.js';
import ContainerViagens from './ContainerViagens.js';
import { Component } from 'react';

var imgPaths = FetchImages(1);
//var imgs = RequireImages(imgPaths);
class TelaHome extends Component{
    
    render(){
        return(
            <View style={styles.scroll}>
                <ScrollView>
                    <Text style={styles.Textos}>Explore</Text> 
                    <ContainerButtons width={'94%'} height={120} margin={'2%'} top={30}></ContainerButtons>
                    <Text style={styles.Textos}>Destaques</Text>
                    <ContainerViagens width={'94%'} heigth={185} margin={'3%'}></ContainerViagens>
                    <Text style={styles.Textos}>Promoções</Text>
                    <ContainerViagens width={'94%'} heigth={185} margin={'3%'}></ContainerViagens>
                    <Text style={styles.Textos}>Já Visitados</Text>
                    <ContainerViagens width={'94%'} heigth={185} margin={'3%'}></ContainerViagens>
                    <Text style={styles.Textos}>Mais Visitados</Text> 
                    <ContainerViagens width={'94%'} heigth={185} margin={'3%'}></ContainerViagens>
                </ScrollView>
            </View>
        );
    };
    
};


function FetchImages(Id){
    return [{
        "Image":{
            "path":"./assets/maldivas.jpeg",
            "title":"maldivas"
        }
    }];
}
/*function RequireImages(paths){
    var imgs = [];
    console.log(paths.length);
    for(var i = 0; i < paths.length; i++){
        imgs.push(require("/home/yuri/mais_um/assets/maldivas.jpeg"));
        console.log(imgs[i]);
    }
    return imgs;
}*/
 
const styles = StyleSheet.create({
    scroll:{
        //position:'absolute',
        //top:0,
        //left:0,
        //height:'95%',
        //width:'100%',
        flex:1,
        backgroundColor:'white',
      },
    Textos:{
        fontSize:22,
        marginLeft:'5%',
        marginTop:20,
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#bfbfbf',
    },  
});

export default TelaHome;
