import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewProductosView } from './NewProductosView';
import { ProductosView } from './ProductosView';
import { CategoriasView } from './CategoriasView';
import { MarcasView } from './MarcasView';

//Vistas
const Stack = createNativeStackNavigator();

export default function MainScreenView() {

  return (
      <Stack.Navigator screenOptions = { {
      headerShown: false 
    }}>
       <Stack.Screen name = "Productos" component = {ProductosView} />
       <Stack.Screen name = "Nuevo Producto" component = {NewProductosView} />
       <Stack.Screen name = "CategoriasView" component={CategoriasView} />
       <Stack.Screen name = "MarcasView" component={MarcasView} />
       
      </Stack.Navigator>
  );
  
}