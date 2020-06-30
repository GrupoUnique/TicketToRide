import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity} from 'react-native';

export default function TelaQr ({navigation}){
    return(
        <View style={styles.containerPrincipal}>
            <Image resizeMode={"stretch"} style={styles.qrCode} source={require('../assets/QrCode.jpg')}/>
            <Text style={styles.textoInform}>Informações de viagem</Text>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Assento: 32</Text>
                <Text style={styles.styleTextos}>Portão de embarque: 5J</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Tempo de viagem: 32 anos</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Número de paradas: 1340</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Possui banheiro: Sim</Text>
                <Text style={styles.styleTextos}>Possui Wi-fi: Sim</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
    },
    qrCode:{
        width:'100%',
        height:'60%',
    },
    containerTextos:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'96%',
    },
    styleTextos:{
        fontSize:18,
        marginTop:25,
    },
    textoInform:{
        fontSize:22,
        marginTop:20,
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#bfbfbf',
    },  
})