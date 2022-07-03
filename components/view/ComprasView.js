import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';


//Componentes
import { CardComprasView } from '../util/CardComprasView';

//Models
import { TblCompra } from '../../model/TblCompra';

class ComprasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblCompra = new TblCompra();
        this.CargarCompra();
    }

    CargarCompra = async (param = "") => {
        const compra = await this.TblCompra.Get(param);

        this.setState({
            isLoading: false,
            Dataset: compra
        });

    }

    Load = async (param = (new TblCompra())) => {
        const proveedor = await param.TblProveedor.get();
        const empleado = await param.TblEmpleado.get();
        const detalle = await param.TblDetalleCompra.get();

        this.props.navigation.navigate('DetalleCompraView', {
            objecto: param,
            proveedor: proveedor,
            empleado: empleado,
            detalle: detalle
        });
    
        }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
    <TextInput style = {styles.text_input}
            placeholder = 'Buscar compra'
            onChangeText = { val => this.CargarCompra(val)}></TextInput>
            <View style = { styles.form_control}>
            <Button title='Nueva compra' onPress={async () => {
                this.props.navigation.navigate("NuevaCompra", {
                    CargarCompra: this.CargarCompra
                });
            }}
            ></Button>
            </View>
            <Text style = {styles.Title}>Historial de compras</Text>
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardComprasView key = {c.codigo_Compra}
                     data = { c } Load = {this.Load}/>
                )}
        </ScrollView> )
    }
}

export { ComprasView }

const styles = StyleSheet.create({
    CardStyles:{
      flex: 5,
      width: "100%",
      backgroundColor: 'white'
      },
    text_input: {
      margin: 12,
      padding: 10,
      fontSize: '1.2rem',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "teal"
    },
    Title: {
        padding: 10,
        fontSize: 25
    },
    form_control: {
        margin: 10
    }
    
  });