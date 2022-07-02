import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';

import {CardComp} from '../util/CardComp'
//Model
import { TblCompra } from '../../model/TblCompra';
import { TblDetalleCompra } from '../../model/TblDetalleCompra';

class NewFrmCompraView extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.Compra = new TblCompra();
        this.detallecompra = new TblDetalleCompra();
       
        this.state = {
            detallecompra: [],
            proveedor: "",
            empleado: ""
        }

        this.CargarCompra = this.props.route.params.CargarCompra;
    }

    SaveDetails = async (details = (new TblDetalleCompra())) => {

        console.log(details);

        this.state.detallecompra.push(details);

        this.setState({
         detallecompra: this.state.detallecompra,
        });

        this.props.navigation.navigate("NuevaCompra");
    }

    EliminarProducto = async (param) => {

        const delete_ = this.state.detallecompra.filter(i => i.codigo_Producto !== param.codigo_Producto);
 
        this.setState({
            detallecompra: delete_
        });
    }

    SProveedor = async (id, name) => {
        this.setState({
            proveedor: name
        })

        this.Compra.codigo_proveedor = id;
    }

    SEmpleado = async (id, name) => {
        this.setState({
            empleado: name
        })

        this.Compra.codigo_Empleado = id;
    }

    Save = async () => {
        try {
            await this.Compra.Save("codigo_Compra");

            for (let index = 0; index < this.state.detallecompra.length; index++) {
                const detallecompra = this.state.detallecompra[index];
                detallecompra.codigo_Compra = this.Compra.codigo_Compra;

                await this.detallecompra.Save("codigo_DetalleCompra");
            }

            return true;
        } catch (error) {
            console.log(error);
            return true;
        }

    }

    render() {
        return <ScrollView style = {styles.CardStyles}>
            <Text style={styles.Title}>Nueva Compra</Text>

            {/** FORMULARIO */}
            <View style = {styles.row}>
    
                <TextInput style = {styles.InputStyle1}
                    placeholder = 'Proveedor'
                    value = {this.state.proveedor}></TextInput>

                <Button title="+" onPress = { async () => {
                    this.props.navigation.navigate("SProveedoresView", {
                        SProveedor: this.SProveedor
                    });
                }} />
            </View>

            <View style = {styles.row}>
    
                <TextInput style = {styles.InputStyle1}
                    placeholder = 'Empleado'
                    value = {this.state.empleado}></TextInput>

                <Button title="+" onPress = { async () => {
                    this.props.navigation.navigate("SEmpleadosView", {
                        SEmpleado: this.SEmpleado
                    });
                }} />
            </View>  

            <TextInput style = {styles.InputStyle}
                    placeholder = 'Fecha de compra'
                    onChangeText = { val => this.Compra.Fecha_Compra = val}></TextInput>      

            {/** Detalle */}
            <View style = {{padding: 8}}>
            <Button title="Agregar producto" onPress = { async () => {
                    this.props.navigation.navigate("NuevoDetalleCompra", {
                        SaveDetails: this.SaveDetails
                    });
                }} />
            </View>
            <Text style = {styles.Title}>Productos</Text>
            <View style = {{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderRadius: 3,
                borderColor: '#2196f3',
                backgroundColor: 'white',
                margin: 4,
                padding: 4,
                marginLeft: 8,
                marginRight: 8
            }}>
            <ScrollView>
            
                {
                this.state.detallecompra.map(
                    c => <View key = {c.codigo_Producto} style = {{backgroundColor: 'teal', 
                    padding: 2, 
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: 'green',
                    margin: 4}}>
                        <CardComp key = {c.codigo_Producto + 1} obj = {c}></CardComp>
                        <Text style = {{fontSize: 16, color: 'white'}}>Cantidad: {c.Cantidad}</Text>
                        <Text style = {{fontSize: 16, color: 'white'}}>SubTotal: {c.Sub_Total}</Text>
                        <Button title = 'Eliminar' onPress={async () => { 
                            this.EliminarProducto(c);
                        }}></Button>
                    </View>
                )
                }

            </ScrollView>
            </View>

            {/*transacciones result */}
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

                <Text>Descuento: </Text>
                <TextInput style = {styles.InputStyle}
                    placeholder = 'C$0.000'
                    onChangeText = { val => this.Compra.Descuento = val}></TextInput>

            </View>

            <View style = {styles.normal_row}>
            <Text>IVA: </Text>
                <TextInput style = {styles.InputStyle}
                    placeholder = 'C$0.000'
                    onChangeText = { val => this.Compra.Iva_Compra = val}></TextInput>
                </View>
                <View style = {styles.normal_row}>
                <Text>Total: </Text>
                <TextInput style = {styles.InputTotal}
                    placeholder = 'C$0.000'
                    onChangeText = { val => this.Compra.Total = val}></TextInput>

            </View>
         </View>

            {/** OPCIONES */}

            <Button title = "Guardar" onPress = { async () => {
                const response = await this.Save();
                
                if (response) {
                    await this.CargarCompra();
                    this.setState({
                        detallecompra: [],
                        proveedor: "",
                        empleado: ""
                    });

                    this.props.navigation.navigate("ComprasView");
                } else {
                    Alert.alert("Algo salio mal :(");
                }
            
            }} />

            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("ComprasView");
            }} />
        </ScrollView>;
    }
}

export { NewFrmCompraView }

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