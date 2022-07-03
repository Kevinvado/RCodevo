import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TblCategoria } from '../../../model/TblCategoria';
import { TblMarca } from '../../../model/TblMarca';

class DetalleProductoView extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      DetalleProducto: this.props.route.params.objecto,
      CatLista: this.props.route.params.CatLista ?? [],
      CatMarca: this.props.route.params.CatMarca ?? []
    }

  }

  render() {
    return <ScrollView style={{ padding: 10 }}>
      <Text style={styles.Title}>Detalle de producto</Text>
      <Button title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("Productos");
      }} />
      <View style = {{
       marginTop: 8,
       padding: 8,
       backgroundColor: 'white',
       borderWidth: 1,
       borderColor: 'teal'}}>
      <Text style = {{fontSize: 17, marginBottom: 4}}>Nombre de producto: {this.state.DetalleProducto.Nombre_producto}</Text>
      {
        this.state.CatLista.map(
            (c = (new TblCategoria))=>
            <Text key = {c.codigo_Categoria}>Categoria: {c.Nombre_Categoria}</Text>
        )
      }
      {
        this.state.CatMarca.map(
            (c = (new TblMarca)) =>
            <Text key={c.codigo_MarcaProducto}>Marca: {c.Nombre_Marca}</Text>
        )
      }
      <Text style = {{ marginTop: 4}}>Estado: {this.state.DetalleProducto.Estado_Producto}</Text>
      </View>
    </ScrollView>;
  }
}

export { DetalleProductoView }

const styles = StyleSheet.create({
  Title: {
    fontSize: 26
  }
});