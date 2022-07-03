import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';


//Componentes
import { CardProductosView } from '../util/CardProductosView';

//Models
import { TblProductos } from '../../model/TblProducto';

class ProductosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblProductos = new TblProductos();
        this.Cargar();
    }

    Cargar = async (param = "") => {
        const productos = await this.TblProductos.Get(param);

        this.setState({
            isLoading: false,
            Dataset: productos
        });

    }

    Load = async (param = (new TblProductos())) => {

    const clista = await param.TblCategoria.get();
    const cmarca = await param.TblMarca.get();

    this.props.navigation.navigate('DetalleProductoView', {
        objecto: param,
        CatLista: clista,
        CatMarca: cmarca
    });
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar productos'
            onChangeText = { val => this.Cargar(val)}></TextInput>

            <View style = { styles.form_control}>
            <Button title='Nueva Producto' onPress={async () => {
                this.props.navigation.navigate("Nuevo Producto", {
                    Cargar: this.Cargar
                });
            }}></Button>
            </View>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardProductosView key = {c.codigo_Producto}
                     data = { c } selected = {false} Load = { this.Load } />
                )}
        </ScrollView> )
    }
}

export { ProductosView }

const styles = StyleSheet.create({
    CardStyles:{
      flex: 5,
      width: "100%",
      backgroundColor: 'white'
      },
    text_input: {
      margin: 10,
      padding: 10,
      fontSize: '1.2rem',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "teal"
    },
    form_control: {
        margin: 10
    }
    
  });