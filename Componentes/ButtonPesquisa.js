import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, FlatList, Touchable,Image} from 'react-native';


export default class ButtonPesquisa extends Component{
    render(){
        
        return(
            <View style={{width:'96%', height:180, marginHorizontal:'2%',marginVertical:10}}>
                <TouchableOpacity style={styles.container}>
                    <View style={{width:'40%', height:'100%',alignItems:'center'}}> 
                        <Image source={this.props.imagem} style={styles.img}/> 
                        <Text style={styles.textInfo}>Maldivas</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textInfo}>Data : 12/31/2930</Text>
                        <Text style={styles.textInfo}>Empresa : bus4u</Text>
                        <Text style={styles.textInfo}>Preço : R$ 1200,00</Text>
                        <Text style={styles.textInfo}>Avaliação</Text>
                    </View>   
                </TouchableOpacity>
            </View>    
        );
    };
}


const styles = StyleSheet.create({
    container:{
        borderColor:'#bfbfbf',
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        width:'100%',
        height:'100%',
    },  
    containerInfo:{
        width:'60%',
        height:'100%',
        justifyContent:'space-between',
        padding:15,
    },

    img:{
        width:'94%',
        height:'80%',
        margin:'3%',
        borderRadius:10,
    },
    textInfo:{
        fontSize:16,
    },
});