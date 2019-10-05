import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './componentes/main';
import TarefaScreen from './componentes/tarefa';

const AppNavigator = createStackNavigator(
    {
        //String de Navegação: Componente da tela
        Main: MainScreen,
        Tarefa: TarefaScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#805000'
            },
            headerTintColor: '#FFF'
        },
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

