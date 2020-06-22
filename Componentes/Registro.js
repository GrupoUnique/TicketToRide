import React , {Component}from 'react';
import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity,} from 'react-native';


export default class TelaCadastro extends Component{
    state = {
        user:'',
        senha:'',
    };
     render(){   
        return(
            <View style={styles.containerPrincipal}>
                <View style={styles.container}>
                    <Image style={styles.imgs} source={require('/home/yuri/mais_um/assets/logo.png')}/>
                    <TextInput style={styles.input} placeholder={'Usuario'} onSubmitEditing={() => this.passwordInput.focus()} onChangeText={(texto) => this.setState({user:texto})}/>
                    <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry ref={(input) => this.passwordInput = input} onChangeText={(texto) => this.setState({senha:texto})}/>
                    <TouchableOpacity style={styles.botao} onPress={() => {
                                                            if(this.state.user.toLowerCase() === "adm" && this.state.senha.toLowerCase() ==="123")console.log('Logou');
                                                            else console.log("N logou");
                                                        }
                                                    }>
                        <Text style={styles.textos}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textos}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
     }
};

const styles = StyleSheet.create({ 
        containerPrincipal:{
            flex:1,
            alignItems:"center",
            backgroundColor:"white",
            justifyContent:"center",
        },
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center", 
            width:'90%',
        },
        imgs:{
            height:260,
            width:260,
        },
        input:{
            width:'90%',
            borderColor:'black',
            borderWidth:1,
            borderRadius:5,
            padding:10,
            height:40,
            marginTop:10,
        },
        botao:{
            marginTop:10,
            backgroundColor:'#f7cf3e',
            borderRadius:7,
            width:'40%',
            alignContent:'center',
            alignItems:'center',
        },
        textos:{
            fontSize:18,
        }
    }
);