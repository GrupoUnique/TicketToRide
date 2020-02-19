import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView, FlatList, TouchableOpacity, Image, Modal} from 'react-native';
import Picker from './Picker.js';
import { Switch } from 'react-native-paper';
export default class TelaFiltros extends Component{
    state={
        dateBegin:'',
        dateEnd:'',
        isDate:false,
        isPrice:false,
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
                    this.props.onClose(this.state.dateBegin);
                }}>
                        <View style={{width:'96%',
                                    flexDirection:'row',
                                    backgroundColor:'white',
                                    justifyContent:'space-between',
                                    marginTop:10,
                                    marginHorizontal:'2%',
                                    alignItems:'center',}}>
                            <Image source={require('/home/yuri/mais_um/assets/down.png')}/>
                            <TouchableOpacity onPress={() => this.props.onClose(this.state.date)}>
                                <Image source={require('/home/yuri/mais_um/assets/close.png')}/>
                            </TouchableOpacity>
                        </View>  
                        <Text style={{fontSize:16}}>Filtros</Text> 
                        <View style={styles.containersComponentes}>
                            <Text style={{alignSelf:'center', fontSize:14}}>Data da viagem entre:</Text>
                            <Picker  style={{marginTop:15, alignSelf:'center'}} width={80} height={30}  date={this.state.date} setDate={(date) => this.setState({date:date})}/>
                            <Text style={{alignSelf:'center'}}>e</Text>
                            <Picker  style={{marginTop:15, alignSelf:'center'}} width={80} height={30}  date={this.state.date} setDate={(date) => this.setState({date:date})}/>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isDate} onValueChange={() => {this.setState({isDate:!this.state.isDate});
                                                                            console.log(this.state.isDate);} }/>

                        </View>
                        <View style={styles.containersComponentes}>
                            <Text style={{fontSize:14}}>Valor da viagem entre:</Text>
                            <TextInput style={styles.inputs}/>
                            <Text style={{fontSize:14}}>e</Text>
                            <TextInput style={styles.inputs}/>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isDate} onValueChange={() => {this.setState({isDate:!this.state.isPrice});
                                                                            console.log(this.state.isDate);} }/>
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
        paddingHorizontal:'2%',
    },
    containersComponentes:{
        width:'96%',
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        marginTop:30,
        marginHorizontal:'2%',
        alignItems:'center',
    },
   inputs:{
       width:80,
       height:30,
       borderColor:'black',
       borderRadius:5,
       borderWidth:1,
   }
});