import React from 'react';
import TelaHome from './TelaHome.js';
import TelaPesquisa from './TelaPesquisa.js';
import TelaPerfil from './TelaPerfil.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import TelaLogin from './TelaLogin.js';
import TelaCadastro from './TelaCadastro.js';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaCompra from './TelaCompra.js'
import TelaQr from './TelaQr.js';
import TelaSplash from './TelaSplash.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




Icon.loadFont();

const Tab = createBottomTabNavigator();

function Home() {
    return (
      <Tab.Navigator initialRouteName="TelaHome" sceneAnimationEnabled={true} tabBarOptions={{activeTintColor: 'black', }}>
        <Tab.Screen name="TelaHome" component={TelaHome} options={{
                                                                    tabBarLabel: 'Home',
                                                                    tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> )
        }}/>
        <Tab.Screen name="Pesquisa" component={TelaPesquisa}  options={{
                                                                    tabBarLabel: 'Pesquisar',
                                                                    tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} /> )
        }}/>
        <Tab.Screen name="Perfil" component={TelaPerfil} options={{
                                                                    tabBarLabel: 'Perfil',
                                                                    tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} /> )
        }}/>
      </Tab.Navigator>
    );
  }

  const Stack = createStackNavigator();
  
function MyStack() {
    return (
        <NavigationContainer initialRouteName="Splash" > 
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={TelaSplash} />
                <Stack.Screen name="Login" component={TelaLogin} />
                <Stack.Screen name="Cadastro" component={TelaCadastro} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="HomeTeste" component = {TelaHome}/>
                <Stack.Screen name="Compra" component={TelaCompra}/>
                <Stack.Screen name="Qr" component={TelaQr}/>
            </Stack.Navigator>
      </NavigationContainer>
    );
}
  



export default MyStack;