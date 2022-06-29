import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FrmDetalleCompra } from './frmview/FrmDetalleCompra';
import { NewFrmCompra } from './frmview/NewFrmCompra';

//Views 

const Stack = createNativeStackNavigator();

export default function MainScreenView() {

  return (
      <Stack.Navigator screenOptions = { {
      headerShown: false 
    }}>
       <Stack.Screen name="Productos" component = {ProductosView} />
       {
           /*
            <Stack.Screen name="Detalle de Compra" component = {FrmDetalleCompra} />
            <Stack.Screen name="Nueva Compra" component = {NewFrmCompra} />
           */
       }
       
      </Stack.Navigator>
  );
  
}