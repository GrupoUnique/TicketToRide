import { createStackNavigator } from 'react-navigation';
import TelaPesquisa from './TelaPesquisa.js';
import TelaHome from './TelaHome.js';
import Buttons from './Buttons.js';
import { Button } from 'react-native-paper';
const AppNavigator = createStackNavigator({
     Pesquisa:{screen:TelaPesquisa},
     Home:{screnn:TelaHome},
     Button:{screen:Buttons}
});

export default AppNavigator;