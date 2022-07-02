import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewProductosView } from './NewProductosView';
import { ProductosView } from './ProductosView';
import { CategoriasView } from './CategoriasView';
import { MarcasView } from './MarcasView';
import { NewFrmCompraView } from './NewCompraView';
import { ComprasView } from './ComprasView'
import { SProveedoresView } from './SelecionesView/SProveedoresView';
import { SEmpleadosView } from './SelecionesView/SEmpleadosView';
import { NewDetalleCompraView } from './NewDetalleCompraView';
import { SProductosView } from './SelecionesView/SProductosView';

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
       <Stack.Screen name = "SProveedoresView" component={SProveedoresView} />
       <Stack.Screen name = "SEmpleadosView" component={SEmpleadosView} />
       <Stack.Screen name = "SProductosView" component={SProductosView} />
       <Stack.Screen name = "NuevaCompra" component={NewFrmCompraView} />
       <Stack.Screen name = "NuevoDetalleCompra" component={NewDetalleCompraView} />
       <Stack.Screen name = "ComprasView" component={ComprasView} />
       
      </Stack.Navigator>
  );
  
}