import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

//Componentes

//Models
import { TblProductos } from '../../../model/TblProducto';
import { CardProductosView } from '../../util/CardProductosView';

class SProductosView extends React.Component {
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

    SProducto = async (id, name) => {
        console.log(id, name);
        this.props.route.params.SProducto(id, name);
        this.props.navigation.navigate("NuevoDetalleCompra");
    }


    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar productos'
            onChangeText = { val => this.Cargar(val)}></TextInput>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardProductosView key = {c.codigo_Producto}
                     data = { c } SProducto = {this.SProducto} selected = {true} />
                )}
        </ScrollView> )
    }
}

export { SProductosView }

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