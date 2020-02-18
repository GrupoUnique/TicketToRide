import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import TelaPesquisa from './TelaPesquisa.js';
import TelaHome from './TelaHome.js';

const MainNavigator = createStackNavigator({
  Home: { screen: TelaHome },
  Profile: { screen: TelaPesquisa },
});

const stack = createAppContainer(MainNavigator);

export default stack;
