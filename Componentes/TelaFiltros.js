import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, Touchable, Image, Modal} from 'react-native';
import Picker from './Picker.js';

export default class TelaFiltros extends Component{
    state={
        date:'',
    }
    printDate(){
        console.log(this.state.date);
    }
    render(){
        return(
            <View>
                <Modal
                style={styles.container}
                animationType="slide"
                transparent={false}
                visible={this.props.Visible}
                onRequestClose={() => {
                    this.props.onClose(this.state.date);
                    console.log("Fecha");
                }}>
                <View style={styles.containersComponentes}>
                            <Image style={styles.img} source={require('/home/yuri/mais_um/assets/search.png')}/>
                            <Image style={styles.img} source={require('/home/yuri/mais_um/assets/search.png')}/>
                        </View>
                        <Text>Filtros</Text>
                        <View style={styles.containersComponentes}>
                            <Text>Data da viagem entre:</Text>
                            <Picker width={100} height={30} date={this.state.date} setDate={(date) => this.setState({date:date})}/>
                        </View>
                        <View style={styles.containersComponentes}>

                        </View>
                        <View style={styles.containersComponentes}>

                        </View>
                        <View style={styles.containersComponentes}>

                        </View>
                        <Text>Lugares próximos</Text>
                        <View style={styles.containersComponentes}>

                        </View>
                        <View style={styles.containersComponentes}>

                        </View>
                        <View style={styles.containersComponentes}>

                        </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'white',
    },
    containersComponentes:{
        width:'100%',
        height:'8%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
    },
    img:{
       height:'3%',
       width:'6%', 
    }  
});