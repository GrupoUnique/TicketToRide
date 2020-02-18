import React , {useState}from 'react';
import { StyleSheet, Text, View, Button,ScrollView, TouchableOpacity,FlatList, Touchable} from 'react-native';
import Buttons from './Buttons.js'; 
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import TelaHome from './TelaHome.js';
import TelaPesquisa from './TelaPesquisa.js';
import TelaPerfil from './TelaPerfil.js';
import Icon from 'react-native-vector-icons/FontAwesome';



Icon.loadFont();


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


const Nav = createAppContainer(MainNavigation);

export default createAppContainer(MainNavigation);