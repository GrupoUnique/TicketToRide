import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';


export default function TelaCadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [estado, setEstado] = useState('Selecione seu estado');
    const [cidade, setCidade] = useState('Selecione sua cidade');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [state, setState] = useState({date: state});
    var EmailInput, SenhaInput, CepInput, CpfInpute, EnderecoInput, NumInput, ComplementoInput,
    BairroInput, DataInput, ConfirmaInput;

    return (
        <ScrollView style={styles.containerPrincipal}>
            <View style={styles.container}>

                <Text style={styles.textos}>Dados pessoais</Text>
                <TextInput style={styles.input} 
                    placeholder={'Nome completo'} 
                    onSubmitEditing={() => CpfInpute.focus()} 
                    onChangeText={(texto) => setNome(texto)} 
                />
                <TextInput style={styles.input} 
                    keyboardType={"numeric"} 
                    placeholder={'CPF'} 
                    ref={(input) => CpfInpute = input} 
                    onSubmitEditing={() => EmailInput.focus()} 
                    onChangeText={(texto) => setCpf(texto)} 
                />
                <TextInput style={styles.input} 
                    keyboardType={"email-address"} 
                    ref={(input) => EmailInput = input} 
                    placeholder={'E-mail'} 
                    onChangeText={(texto) => setEmail(texto)} 
                /> 

                <DatePicker style={styles.input}
                    date={state.date}
                    mode={"date"}
                    placeholder={"Data de Nascimento"}
                    format={"DD/MM/YYYY"}
                    minDate={"01/01/1870"}
                    maxDate={"07/07/2020"}
                    confirmBtnText={"Confirmar"}
                    cancelBtnText={"Cancelar"}
                    showIcon={false}
                    customStyles={{
                            dateInput: {
                            alignContent: "flex-start",
                            alignSelf: "flex-start",
                            alignItems: "flex-start",
                            borderWidth: 0,
                        }
                    }}
                    onDateChange={(date) => {setState({date: date})}}
                />
                <TextInput 
                    style={styles.input} 
                    keyboardType={"phone-pad"} 
                    placeholder={'Numero de telefone'} 
                    onChangeText={(texto) => setTelefone(texto)} 
                />

                <Text style={styles.textos}>Endereço</Text>
                <Picker style={styles.input} 
                    selectedValue={estado} 
                    onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
                >
                    <Picker.Item label="Selecione seu estado" value="null"/>
                    <Picker.Item label="AM" value="am" />
                    <Picker.Item label="GO" value="go" />
                    <Picker.Item label="MG" value="mg" />
                    <Picker.Item label="PB" value="pb" />
                    <Picker.Item label="PE" value="pe" />
                    <Picker.Item label="RJ" value="rj" />
                    <Picker.Item label="SP" value="sp" />
                </Picker>

                <Picker style={styles.input} selectedValue={cidade} onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}>
                    <Picker.Item label="Selecione sua cidade" value="null"/>
                    <Picker.Item label="Borá" value="bora" />
                    <Picker.Item label="Campinas" value="campinas" />
                    <Picker.Item label="Campos do Jordão" value="camposJordao" />
                    <Picker.Item label="Duque de Caxias" value="duqueCaxias" />
                    <Picker.Item label="Ferraz de Vasconcelos" value="ferraz" />
                    <Picker.Item label="Guarulhos" value="gru" />
                    <Picker.Item label="Macaé" value="macae" />
                    <Picker.Item label="Mogi das Cruzes" value="macae" />
                    <Picker.Item label="Niterói" value="niteroi" />
                    <Picker.Item label="Poá" value="poaMelhorCidade" />
                    <Picker.Item label="Rio de Janeiro" value="rioJaneiro" />
                    <Picker.Item label="Santo André" value="santoAndre" />
                    <Picker.Item label="São Bernardo do Campo" value="saoBernardo" />
                    <Picker.Item label="São Gonçalo" value="saoGoncalo" />
                    <Picker.Item label="São Paulo" value="saoPaulo" />
                    <Picker.Item label="Sorocaba" value="sorocaba" />
                    <Picker.Item label="Varre-sai" value="varreSai" />
                    <Picker.Item label="Volta Redonda" value="voltaRedonda" />
                </Picker> 

                <TextInput style={styles.input} 
                    placeholder={'Endereço (Rua, avenida, etc)'} 
                    ref={(input) => EnderecoInput = input}
                    onSubmitEditing={() => NumInput.focus()} 
                    onChangeText={(texto) => setLogradouro(texto)} 
                />
                <TextInput 
                    style={styles.input} 
                    keyboardType={"number-pad"} 
                    placeholder={'N°'} 
                    ref={(input) => NumInput = input} 
                    onSubmitEditing={() => BairroInput.focus()}
                    onChangeText={(texto) => setNumero(texto)} 
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Bairro'}
                    ref={(input) => BairroInput = input}
                    onSubmitEditing={() => ComplementoInput.focus()}
                    onChangeText={(texto) => setBairro = texto}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder={'Complemento'} 
                    ref={(input) => ComplementoInput = input} 
                    onSubmitEditing={() => SenhaInput.focus()}
                    onChangeText={(texto) => setComplemento(texto)}
                />
                <Text style={styles.textos}>Dados de Acesso</Text>
                <TextInput 
                    style={styles.input} 
                    secureTextEntry 
                    placeholder={'Senha'} 
                    ref={(input) => SenhaInput = input} 
                    onSubmitEditing={() => ConfirmaInput.focus()}
                    onChangeText={(texto) => setSenha(texto)} 
                />
                <TextInput 
                    style={styles.input} 
                    secureTextEntry 
                    placeholder={'Confirme sua senha'} 
                    ref={(input) => ConfirmaInput = input} 
                    onChangeText={(texto) => { if (texto === senha) console.log("Igual"); }} 
                />
                
                <TouchableOpacity style={styles.botao} onPress={() => {
                    if (true) navigation.navigate("Login");
                    else console.log("N logou");
                }
                }>
                    <Text style={{ fontSize: 22 }}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imgs: {
        height: 260,
        width: 260,
    },
    input: {
        width: '96%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        height: 40,
        marginTop: 10,
        paddingLeft: 10,
    },
    inputSenha: {
        width: '96%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        height: 40,
        marginVertical: 10,
    },
    botao: {
        marginTop: 10,
        backgroundColor: '#f7cf3e',
        borderRadius: 7,
        borderWidth: 1,
        width: '96%',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textos: {
        fontSize: 20,
        marginTop: 20,

    }
}
);
