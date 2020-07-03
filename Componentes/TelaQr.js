import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity} from 'react-native';

export default function TelaQr ({navigation}){
    return(
        <View style={styles.containerPrincipal}>
            <Image resizeMode={"stretch"} style={styles.qrCode} source={require('../assets/QrCode.jpg')}/>
            <Text style={styles.textoInform}>Informações de viagem</Text>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Assento:</Text>
                <Text style={styles.infos}>31 - Janela</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Portão de embarque:</Text>
                <Text style={styles.infos}>53 - Ala B</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Partida:</Text>
                <Text style={styles.infos}>23/12/2021 10h00m</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Número de paradas:</Text>
                <Text style={styles.infos}>1340 - 20 minutos</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Banheiro:</Text>
                <Text style={styles.infos}>Sim</Text>
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.styleTextos}>Wi-Fi:</Text>
                <Text style={styles.infos}>Sim</Text>
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
        width:'75%',
        height:'45%',
    },
    containerTextos:{
        flexDirection:'row',
        alignContent:"flex-start",
        justifyContent:'space-between',
        width:'96%',
    },
    styleTextos:{
        fontSize:18,
        marginTop:30,
    },
    textoInform:{
        fontSize:22,
        marginTop:20,
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#bfbfbf',
        textAlign:"center",
    },  
    infos:{
        fontSize: 18,
        marginTop:30,
        alignItems: "flex-end",
    },
})