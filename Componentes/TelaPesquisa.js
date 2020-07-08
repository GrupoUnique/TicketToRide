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
            <View style={styles.main}> 
                <TelaFiltros
                    Visible={this.state.filter} 
                    onClose={(date) => {this.setarDate(date)}}
                />
                <View style={styles.barraPesquisar}>
                    <SearchBar containerStyle={styles.container} 
                        inputContainerStyle={styles.inputContainer} 
                        placeholder={"Digite aqui seu destino"}
                        inputStyle={{borderWidth:0}}
                        onChangeText={this.pesquisar} 
                        value={pesquisa}
                    />  
                    <TouchableOpacity style={styles.botaoFiltro} 
                        onPress={()=> this.setState({filter:true})}>
                        <Image style={styles.img} source={require('../assets/down.png')}/>
                    </TouchableOpacity>
                </View>
                
                <FlatList style={{backgroundColor:'white'}}
                    data={this.state.lugares} 
                    renderItem={({item}) => 
                        <ButtonPesquisa 
                            imagem={require('../assets/maldivas.jpeg')} 
                            navigator={this.props.navigation} 
                            screen={"Compra"}
                        />
                    }
                />
            </View> 
        );
    };
    
};

const styles = StyleSheet.create({ 
    main:{
        alignItems:'center', 
        backgroundColor:'white', 
        flex:1
    },
    barraPesquisar:{
        flexDirection:'row', 
        width:'100%'
    },
    imgs:{
        marginTop: 45,
    },
    container:{
        width:'90%',
        height:50, 
        backgroundColor:'white'
    },
    inputContainer:{
        backgroundColor:'white', 
        borderWidth:0, 
        height: 5
    },
    botaoFiltro:{
        justifyContent: "center",
        borderTopWidth:1, 
        borderBottomWidth:1, 
        borderColor:'black', 
        height:50, 
        width:'10%', 
    }
}
);
