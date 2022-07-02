import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { TblDetalleCompra } from '../../model/TblDetalleCompra';

class NewDetalleCompraView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.DetalleCompra = new TblDetalleCompra();

        this.state = {
            producto: ""
        }

        this.SaveDetails = this.props.route.params.SaveDetails;
    }

    SProducto = async (id, name) => {
        this.setState({
            producto: name
        })

        this.DetalleCompra.codigo_Producto = id;
    }

    render() {
        return <View style = {styles.CardStyles}>
            <Text style={styles.Title}>Detalle Compra</Text>

            {/** FORMULARIO */}     

            <View style = {styles.row}>
    
                <TextInput style = {styles.InputStyle1}
                    placeholder = 'Nombre de producto'
                    value = {this.state.producto}></TextInput>

                <Button title="+" onPress = { async () => {
                    this.props.navigation.navigate("SProductosView", {
                        SProducto: this.SProducto
                    });
                }} />
            </View>

            <View style = {{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderRadius: 3,
                borderColor: '#2196f3',
                backgroundColor: 'white',
                margin: 4,
                marginLeft: 8,
                marginRight: 8
            }}>

            <View style = {styles.normal_row}>
            <Text>Precio: </Text>
                <TextInput style = {styles.InputStyle}
                    placeholder = 'C$0.000'
                    onChangeText = { val => this.DetalleCompra.Precio_Compra = val}></TextInput>
                </View>
            <View style = {styles.normal_row}>
                <Text>Cantidad: </Text>
                <TextInput style = {styles.InputStyle}
                    placeholder = '1'
                    onChangeText = { val => this.DetalleCompra.Cantidad = val}></TextInput>
                    
            </View>
            <View style = {styles.normal_row}>
                <Text>SubTotal: </Text>
                <TextInput style = {styles.InputStyle}
                    placeholder = 'C$0.000'
                    onChangeText = { val => this.DetalleCompra.Sub_Total = val}></TextInput>
                    
            </View>
         </View>

            {/** OPCIONES */}

            <View style = { styles.frm }>
            <Button style = {{margin: 4}} title="Agregar producto" onPress={async () => {

                 this.SaveDetails(this.DetalleCompra); 
            }} />
            
            <Button style = {{margin: 4}} title = "Cancelar" onPress={() => {
                this.props.navigation.navigate("NuevaCompra");
            }} />
            </View>
        </View>;
    }

}

export { NewDetalleCompraView }


const styles = StyleSheet.create({
    Title: {
        fontSize: 26
    },
    InputStyle:{
    flex: 1,
    padding: 8,
    margin: 4,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'gray',
    fontSize: 15,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'white'
    },
    InputStyle1:{
        flex: 1,
        padding: 8,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: 'white',
        fontSize: 15
        },
    row: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#2196f3',
    margin: 4,
    marginLeft: 8,
    marginRight: 8
    },
    normal_row: {
    display: 'flex',
    flexDirection: 'row',
    margin: 4,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center'
    },
    InputTotal:{
        flex: 1,
        padding: 8,
        margin: 4,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: 'gray',
        fontSize: 15,
        marginLeft: 8,
        marginRight: 8
        }
});