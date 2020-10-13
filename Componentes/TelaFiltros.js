import React , {useState, Component}from 'react';
import { StyleSheet, Text, View,TextInput, Picker,TouchableOpacity, Image, Modal, Alert} from 'react-native';
import PickerDate from './Picker.js';
import { Switch } from 'react-native-paper';

const date = new Date().getDate();
//teste 22
export default class TelaFiltros extends Component{
    state={
        isDate:false,
        dateBegin:'',
        disableEnd:true,
        dateEnd:'',

        isPrice:false,
        priceBegin:'',
        priceEnd:'',

        isCompany:false,
        company:'Java',

        isBusType:false,
        bus:'busão',

        isBalada:false,
        isPraias:false,
        isNatureza:false,
        isLagos:false,
        isMontanhas:false,
    }
    printDate(){
        console.log(this.state.date);
    }
    validarRetorno(){
        var validacao = true;
        console.log(this.state.isDate);
        if(this.state.isDate){
            if(this.state.dateBegin==='' || this.state.dateEnd==='' || this.state.dateEnd < this.state.dateBegin){
                Alert.alert('Erro!', 'Uma das datas está vazia ou incorreta');
                validacao = false;
            }
        }
        if(this.state.isPrice){
            if(this.state.priceBegin==='' || this.state.priceEnd==='' || parseInt(this.state.priceBegin)  < 0 || parseInt(this.state.priceEnd) < 0 || parseInt(this.state.priceEnd) < parseInt(this.state.priceBegin)){
                Alert.alert('Erro!', 'Um dos valores está vazio ou incorreto');
                validacao = false;
            }
        }
        return validacao;
    }
    
    MontaRetorno(){
        if(this.validarRetorno()){
            return {
                "isDate":this.state.isDate,
                "dateBegin":this.state.dateBegin,
                "dateEnd":this.state.dateEnd,
                "isPrice":this.state.isPrice,
                "priceBegin":this.state.priceBegin,
                "priceEnd":this.state.priceEnd,
                "isCompany":this.state.isCompany,
                "company":this.state.company,
                "isBusType":this.state.isBusType,
                "busType":this.state.bus,
                "isBalada":this.state.isBalada,
                "isPraias":this.state.isPraias,
                "isNatureza":this.state.isNatureza,
                "isLagos":this.state.isLagos,
                "isMontanhas":this.state.isMontanhas
            };
        }else{
            return{
                '':''
            }
        }
        
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
                    this.props.onClose(this.MontaRetorno());
                }}>
                        <View style={{width:'96%',
                                    flexDirection:'row',
                                    backgroundColor:'white',
                                    justifyContent:'space-between', 
                                    marginTop:10,
                                    marginHorizontal:'2%',
                                    alignItems:'center'}}>
                            <Image style={{width:10, height:10}} source={require('../assets/down.png')}/>
                            <TouchableOpacity onPress={() => {if(this.validarRetorno())this.props.onClose(this.MontaRetorno());}}>
                                <Image source={require('../assets/close.png')}/>
                            </TouchableOpacity>
                        </View>  
                        <Text style={{fontSize:20, marginHorizontal:'2%', marginTop:15}}>Filtros</Text> 
                        <View style={styles.containersComponentes}>
                            <Text style={{alignSelf:'center', fontSize:14}}>Data da viagem entre:</Text>
                            <PickerDate  style={{marginTop:15, alignSelf:'center'}} width={80} height={30}  date={this.state.dateBegin} setDate={(dateBegin) => {this.setState({dateBegin:dateBegin});
                                                                                                                                                                 this.setState({disableEnd:false})}} minDate={date.toString()} disabled={this.state.disableEnd}/>
                            <Text style={{alignSelf:'center'}}>e</Text>
                            <PickerDate  style={{marginTop:15, alignSelf:'center'}} width={80} height={30}  date={this.state.dateEnd} setDate={(dateEnd) => this.setState({dateEnd:dateEnd})} minDate={date.toString()} disabled={this.state.disableEnd}/>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isDate} onValueChange={() => {this.setState({isDate:!this.state.isDate});
                                                                            this.setState({disableEnd:this.state.isDate})} }/>

                        </View>
                        <View style={styles.containersComponentes}>
                            <Text style={{fontSize:14}}>Valor da viagem entre:</Text>
                            <TextInput style={styles.inputs} editable={this.state.isPrice} keyboardType={"numeric"} onChangeText={(text) => {this.setState({priceBegin:text}); 
                                                                                      console.log(this.state.priceBegin);  }}/>
                            <Text style={{fontSize:14}}>e</Text>
                            <TextInput style={styles.inputs} editable={this.state.isPrice} keyboardType={"numeric"} onChangeText={(text) => {this.setState({priceEnd:text}); 
                                                                                      console.log(this.state.priceEnd);}}/>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isPrice} onValueChange={() => {this.setState({isPrice:!this.state.isPrice});} }/>
                        </View>
                        <View style={styles.containersComponentes}>
                            <Text style={{fontSize:14}}>Empresa:</Text>
                            <Picker
                                selectedValue={this.state.company}
                                style={{height: 30, width: 250}}
                                onValueChange={(itemValue, itemIndex) =>{
                                        this.setState({company: itemValue});
                                        console.log(this.state.company);
                                    }
                                }>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                                <Switch  style={{alignSelf:'center'}} value={this.state.isCompany} onValueChange={() => {this.setState({isCompany:!this.state.isCompany});
                                                                            console.log(this.state.isCompany);} }/>
                        </View>
                        <View style={styles.containersComponentes}>
                        <Text style={{fontSize:14}}>Tipo de onibus:</Text>
                            <Picker
                                selectedValue={this.state.bus}
                                style={{height: 30, width: 250}}
                                onValueChange={(itemValue, itemIndex) =>{
                                        this.setState({bus: itemValue});
                                        console.log(this.state.bus);
                                    }
                                }>
                                <Picker.Item label="busão" value="bus" />
                                <Picker.Item label="Onibus" value="oni" />
                                </Picker>
                                <Switch  style={{alignSelf:'center'}} value={this.state.isBusType} onValueChange={() => {this.setState({isBusType:!this.state.isBusType});} }/>
                        </View>
                        <Text style={{fontSize:20, marginTop:35, marginHorizontal:'2%'}}>Lugares próximos</Text>
                        
                        <View style={styles.containersComponentes}>
                            <Text style={{fontSize:14 }}>Baladas</Text>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isBalada} onValueChange={() => {this.setState({isBalada:!this.state.isBalada});
                                                                            console.log(this.state.isBalada);} }/>
                        </View>
                        
                        <View style={styles.containersComponentes}>
                        <Text style={{fontSize:14 }}>Praias</Text>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isPraias} onValueChange={() => {this.setState({isPraias:!this.state.isPraias});
                                                                            console.log(this.state.isPraias);} }/>
                        </View>
                        
                        <View style={styles.containersComponentes}>
                        <Text style={{fontSize:14 }}>Natureza</Text>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isNatureza} onValueChange={() => {this.setState({isNatureza:!this.state.isNatureza});
                                                                            console.log(this.state.isNatureza);} }/>
                        </View>
                        <View style={styles.containersComponentes}>
                        <Text style={{fontSize:14 }}>Lagos</Text>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isLagos} onValueChange={() => {this.setState({isLagos:!this.state.isLagos});
                                                                            console.log(this.state.isLagos);} }/>
                        </View>
                        <View style={styles.containersComponentes}>
                        <Text style={{fontSize:14 }}>Montanhas</Text>
                            <Switch  style={{alignSelf:'center'}} value={this.state.isMontanhas} onValueChange={() => {this.setState({isMontanhas:!this.state.isMontanhas});
                                                                            console.log(this.state.isMontanhas);} }/>
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
        marginTop:35,
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
