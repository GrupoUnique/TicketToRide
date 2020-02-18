import React , {useState}from 'react';
import { StyleSheet, Text, View,TextInput, Button,ScrollView} from 'react-native';

const CoisoVisual = props => {
    return(
        <View style={styles.coiso}>
            <Text>{props.title}</Text>
        </View>
    );
}
export default CoisoVisual;
const styles  = StyleSheet.create({
    coiso:{
        backgroundColor:'red',
        borderColor:'black',
        borderWidth:1,
    }

});