import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function TelaCompra({navigation}){
    return(
            <View style={styles.containerPrincipal}>  
                <Image style={styles.imagem} source={require('../assets/maldivas.jpeg')}/>
                <View style={styles.containerEmpresa}>
                    <Text style={{fontSize:24}}>Empresa</Text>
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
        height:'40%',
        width:'100%',
        marginRight:16,
    },
    imagemEmpresa:{
        height:'100%',
        width:'40%',
    },
    containerEmpresa:{
        marginTop:15,
        marginHorizontal:16,
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
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
    },
    textoLegenda:{
        fontSize: 14,
        marginTop: 15,
        marginBottom: 0,
        marginLeft: 16,
    },
    textoHora:{
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 16,
    }
})

