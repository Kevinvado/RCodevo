import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

//Components
import { CardComp } from '../../util/CardComp';

//Model
import { TblDetalleCompra } from '../../../model/TblDetalleCompra';
import { TblEmpleado } from '../../../model/TblEmpleado';
import { TblProveedor } from '../../../model/TblProveedor';

class DetalleCompraView extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      Compra: this.props.route.params.objecto,
      proveedor: this.props.route.params.proveedor ?? [],
      empleado: this.props.route.params.empleado ?? [],
      detalle: this.props.route.params.detalle ?? [],
      productos: []
    }

  }


  ObtenerProducto = async (param) => {
    const name_product = await param.TblProducto.get();

    console.log(name_product);

  }

  render() {
    return <ScrollView style={{ padding: 10 }}>
      <Text style={styles.Title}>Detalle de compra</Text>
      <Button title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("ComprasView");
      }} />

      <View style = {{
       marginTop: 8,
       padding: 8,
       backgroundColor: 'white',
       borderWidth: 1,
       borderColor: 'teal'}}>

      {
        this.state.empleado.map(
            (c = (new TblEmpleado)) =>
            <Text key={c.codigo_Empleado}>Compra realizada por: {c.Nombre_Empleado}</Text>
        )
      }
      {
        this.state.proveedor.map(
            (c = (new TblProveedor))=>
            <Text key = {c.codigo_Proveedor}>Porveedor: {c.Nombre_Proveedor}</Text>
        )
      }
      
      <Text>Fecha de compra: {this.state.Compra.Fecha_Compra}</Text>
      <Text style = {{ marginTop: 4}}>Iva de compra: {this.state.Compra.Iva_Compra}</Text>
      <Text>Total: {this.state.Compra.Total}</Text>

      <Text style = {{ marginTop: 8, fontSize: 17}}>Productos</Text>

      <View style = {{backgroundColor: 'grey',
    padding: 8,
    borderWidth: 1,
    borderRadius: 4}}>
      {
        this.state.detalle.map(
            (c = (new TblDetalleCompra())) =><View key = {c.codigo_DetalleCompra} >
            <CardComp obj = {c}></CardComp>
            <Text style = {{fontSize: 14, color: 'white'}}>Cantidad: {c.Cantidad}</Text>
            <Text style = {{fontSize: 14, color: 'white'}}>SubTotal: {c.Sub_Total}</Text>
        </View>)
      }
      </View>
      </View>
    </ScrollView>;
  }
}

export { DetalleCompraView }

const styles = StyleSheet.create({
  Title: {
    fontSize: 26
  }
});