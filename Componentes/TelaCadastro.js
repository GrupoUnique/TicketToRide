import React , {useState}from 'react';
import {ScrollView, StyleSheet, Text, View,TextInput, Image,TouchableOpacity,Picker} from 'react-native';
import PickerDate from './Picker.js';

export default function TelaCadastro ({navigation}){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');    
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    return(
            <ScrollView style={styles.containerPrincipal}> 
               <View style={styles.container}>
                <Text style={styles.textos}>Dados pessoais</Text>
                <TextInput style={styles.input} placeholder={'Nome e sobrenome'} onSubmitEditing={() => this.EmailInput.focus()} onChangeText={(texto) => setNome(texto)}/>
                <TextInput style={styles.input} keyboardType={"email-address"} placeholder={'E-mail'} ref={(input) => this.EmailInput = input} onChangeText={(texto) => setEmail(texto)}/>
                <TextInput style={styles.input} placeholder={'Senha'} ref={(input) => this.SenhaInput = input} onChangeText={(texto) => setSenha(texto)}/>
                <TextInput style={styles.inputSenha} placeholder={'Confirme sua senha'} ref={(input) => this.ConfirmaInput = input} onChangeText={(texto) => {if(texto === senha) console.log("Igual");}}/>
                <PickerDate style={{marginTop:20}} width={'97%'} height={40} setDate={(date) => setDataNascimento(date)}/>
                <TextInput style={styles.input} keyboardType={"phone-pad"} placeholder={'Numero de telefone'} ref={(input) => this.TelefoneInput = input} onChangeText={(texto) => setTelefone(texto)}/>
                <TextInput style={styles.input} keyboardType={"number-pad"} placeholder={'Cpf (sem traços)'} ref={(input) => this.CpfInput = input} onChangeText={(texto) => setCpf(texto)}/>
                <Text style={styles.textos}>Endereço</Text>
                <TextInput style={styles.input} keyboardType={"number-pad"} placeholder={'Cep (sem traços)'} ref={(input) => this.CepInput = input} onChangeText={(texto) => setCep(texto)}/>
                <Picker style={styles.input} onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}>
                    <Picker.Item label="Sp" value="sp" />
                    <Picker.Item label="Rj" value="rj" />
                </Picker>
                <Picker style={styles.input} onValueChange={(itemValue, itemIndex) =>setCidade(itemValue)}>
                    <Picker.Item label="São paulo" value="saoPaulo" />
                    <Picker.Item label="Rio negro e são limões" value="gente" />
                </Picker>
                <TextInput style={styles.input} placeholder={'Endereço (Rua, avenida, etc)'} ref={(input) => this.EnderecoInput = input} onChangeText={(texto) => setLogradouro(texto)}/>
                <TextInput style={styles.input} keyboardType={"number-pad"} placeholder={'N°'} ref={(input) => this.NumInput = input} onChangeText={(texto) => setNumero(texto)}/>
                <TextInput style={styles.input} placeholder={'Complemento'} ref={(input) => this.ComplementoInput = input} onChangeText={(texto) => setComplemento(texto)}/>
                <TouchableOpacity style={styles.botao} onPress={() => {
                                                            if(true)navigation.navigate("Login");
                                                            else console.log("N logou");
                                                        }
                                                    }>
                    <Text style={{fontSize:22}}>Registrar</Text>
                </TouchableOpacity>
            </View>    
        </ScrollView>
        );
    };


const styles = StyleSheet.create({ 
        containerPrincipal:{
            flex:1,
            backgroundColor:"white",
        },
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        },
        imgs:{
            height:260,
            width:260,
        },
        input:{
            width:'96%',
            borderColor:'black',
            borderWidth:1,
            borderRadius:5,
            marginTop:20,
            height:40,
            marginTop:10,
        },
        inputSenha:{
            width:'96%',
            borderColor:'black',
            borderWidth:1,
            borderRadius:5,
            marginTop:20,
            height:40,
            marginVertical:10,
        },
        botao:{
            marginTop:10,
            backgroundColor:'#f7cf3e',
            borderRadius:7,
            width:'96%',
            alignContent:'center',
            alignItems:'center',
            marginBottom:20,
        },
        textos:{
            fontSize:20,
            marginTop:20,

        }
    }
);