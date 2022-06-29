import { StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Vistas
import MainScreenView from './MainScreen';

const Tab = createBottomTabNavigator();

const MainView = (props) => {

        return (
    <Tab.Navigator>
      <Tab.Screen name="Productos" component = { MainScreenView } />
       {
           /*
           <Tab.Screen name="Productos" component = { ProductosView } />
           <Tab.Screen name="Compra" component = { CompraView } />
           */
       }
       
      
    </Tab.Navigator>
        );
}

export { MainView }