import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function TelaCompra({navigation}){
    return(
            <View style={styles.containerPrincipal}>  
                <Image style={styles.imagem} source={require('../assets/saopaulo.jpg')}/>
                <View style={styles.containerEmpresa}>
                    <Image style={styles.imagemEmpresa} source={require('../assets/logoRodoviaria.png')}/>
                </View>
                <Text style={styles.textoPropriedades}>Origem: São Paulo                        Destino: Ilhas maldivas</Text>
                <Text style={styles.textoLegenda}>Partida</Text>
                <Text style={styles.textoHora}>Data: 23/12/2021                                              Hora: 10:00</Text>
                <Text style={styles.textoLegenda}>Chegada</Text>
                <Text style={styles.textoHora}>Data: 23/12/2021                                              Hora: 14:00</Text>
                <Text style={styles.textoPropriedades}>Local de embarque:                              Rodoviária do Tietê</Text>
                <Text style={styles.textoPropriedades}>Tipo de onibûs:                                                       Executivo</Text>
                
                <View style={styles.containerCompra}>
                    <Text style={styles.textoValor}>R$ 950,00 ($1.00)</Text>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoCompra}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}


const styles = StyleSheet.create({ 
    containerPrincipal:{
        flex:1,
        alignItems:'flex-start',
        backgroundColor:'white',
        justifyContent:'space-between',
    }, 
    imagem:{
        // height:'30%',
        width:'100%',
        marginRight:16,
    },
    imagemEmpresa:{
        width:'49%',
        // height:'30%',
        
    },
    containerEmpresa:{
        marginTop:15,
        marginHorizontal:16,
        width:"100%",
        alignItems:'center',
    },
    containerCompra:{
        marginBottom:5,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginHorizontal:16,
    },
    botao:{
        marginTop:10,
        backgroundColor:'#f7cf3e',
        borderRadius:7,
        width:'40%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginRight:16,
    },
    textoCompra:{
        fontSize:16,
        color:'white',
    },
    textoValor:{
        fontSize:18,
        fontWeight:'bold',
    },
    textoPropriedades:{
        fontSize:14,
        marginTop:15,
        marginBottom: 5,
        marginLeft:16,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    textoLegenda:{
        fontSize: 18,
        marginTop: 15,
        marginBottom: 0,
        marginLeft: 16,
        alignSelf:"center"
    },
    textoHora:{
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 16,
        borderBottomWidth: 1
    }
})

