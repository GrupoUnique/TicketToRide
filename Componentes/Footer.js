import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import TelaHome from './TelaHome.js';
import TelaPesquisa from './TelaPesquisa.js';
import TelaPerfil from './TelaPerfil.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import TelaLogin from './TelaLogin.js';
import TelaCadastro from './Registro.js';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
Icon.loadFont();

const Stack = createStackNavigator();


const MainNavigation = createMaterialBottomTabNavigator({
    Home:{
            screen:TelaHome,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="home" size={20} inactiveColor={'black'} activeColor={'#b3b3b3'}/>
                ),
                //tabBarColor:'yellow',
            }),
        },
        Pesquisar:{
            screen:TelaPesquisa, //props => <TelaPesquisa {...props} texto={'funfou'}/>,   
            
            
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="search" size={20} inactiveColor={'black'} activeColor={'#b3b3b3'}/> 
                ),
                
               // tabBarColor:'green',
                
            }),
        },
        Perfil:{
            screen:TelaPerfil,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="user" size={20} inactiveColor={'black'} activeColor={'#b3b3b3'}/> 
                ),
               // tabBarColor:'orange',
            }),
        },
    },
            {
                    barStyle:{
                        backgroundColor:'white',
                        shadowRadius:2,
                },
                activeColor: '#b3b3b3',
                inactiveColor:'black',
                shifting:true,
                sceneAnimationEnabled:true,
                initialRouteName:'Home',
            },
);

const Bottom = createAppContainer(MainNavigation);

class Teste extends Component{
    render(){
        return(
            <Bottom independent={true}>
             <MainNavigation/>
             </Bottom> 
        );
    }
}

function MyStack() {
    return (
        <NavigationContainer initialRouteName="Login" > 
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={TelaLogin} />
                <Stack.Screen name="Cadastro" component={TelaCadastro} />
                <Stack.Screen name="Home" component={Teste} />
            </Stack.Navigator>
      </NavigationContainer>
    );
}
  



export default MyStack;