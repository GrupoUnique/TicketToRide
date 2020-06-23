import React , {useState}from 'react';
import { StyleSheet, View, FlatList, Image,TouchableOpacity,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Component } from 'react';
import ButtonPesquisa from './ButtonPesquisa.js';
import TelaFiltros from './TelaFiltros.js';

export default class TelaPesquisa extends Component {
    state = {
        lugares:'',
        filter:false,
        date:'a',
    };
    fetchTrips(text){
        if(text == "a") return ["a","b","c"];
        else if ( text=="")return [];  
        else return ["a"];
    }

    pesquisar = pesquisa => {
        this.setState({pesquisa});
        this.state.lugares = this.fetchTrips(pesquisa);
        console.log(this.state.date);
    };

    IrParaOutra(){
      
    }
    setarDate(data){
        this.setState({filter:false, date:data});
        console.log(this.state.date);
    }

    render(){
        const dataSource = [
            { url: "", color: "#FE0404" },
            { url: "", color: '#522A73' },
            { url: "", color: "#008200" },
            { url: "", color: "#034223" },
            { url: "", color: "#015280" },
          ];
        const {pesquisa} = this.state;
        return(
            <View style={{alignItems:'center', backgroundColor:'white', flex:1}}> 
                <TelaFiltros Visible={this.state.filter} onClose={(date) => {this.setarDate(date)}}/>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <SearchBar containerStyle={{width:'90%',height:50, backgroundColor:'white', borderColor:'white'}} inputContainerStyle={{backgroundColor:'white', borderWidth:0}} inputStyle={{borderWidth:0}}onChangeText={this.pesquisar} value={pesquisa}/>  
                    <TouchableOpacity style={{borderTopWidth:1, borderBottomWidth:1, borderColor:'black', height:50, width:'10%', alignItems:'center',alignContent:'center'}} onPress={()=> this.setState({filter:true})}>
                        <Image style={{marginTop:'40%'}} source={require('/home/yuri/mais_um/assets/down.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList style={{backgroundColor:'white'}}data={this.state.lugares} renderItem={({item}) => <ButtonPesquisa imagem={require('/home/yuri/mais_um/assets/maldivas.jpeg')}/>}/>
            </View> 
        );
    };
    
};

const styles = StyleSheet.create({ 
    imgs:{
        height:'60%',
        width:'60%',
    }
}
);