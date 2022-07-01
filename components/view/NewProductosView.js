import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TblProductos } from '../../model/TblProducto';

class NewProductosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            categoria: "",
            marca: ""
        }

        this.Producto = new TblProductos();

        this.Cargar = this.props.route.params.Cargar;
    }

    SCategoria = async (id, name) => {
        this.setState({
            categoria: name
        });

        this.Producto.codigo_Categoria = id;
    }

    SMarca = async (id, name) => {
        this.setState({
            marca: name
        });

        this.Producto.codigo_Marca = id;
    }

    Save = async () => {
        try {
            await this.Producto.Save("codigo_Producto");
            
            return true;
        } catch (error) {
            console.log(error);
            return true;
        }

    }


    render() {
        return <View style={{ padding: 4, backgroundColor: 'white'}}>

            <Text style={styles.Title}>Nuevo producto</Text>

            {/** FORMULARIO */}
                   
            <TextInput style={styles.InputStyle}
                placeholder='Nombre de producto'
                onChangeText = {val => this.Producto.Nombre_producto = val}></TextInput>

            <View style = {styles.row}>
    
                <TextInput style = {styles.InputStyle1}
                    placeholder='Categoria'
                    value = {this.state.categoria}></TextInput>

                <Button title="+" onPress = { async () => {
                    this.props.navigation.navigate("CategoriasView", {
                        SCategoria: this.SCategoria
                    });
                }} />
            </View>

            <View style = {styles.row}>
    
                <TextInput style = {styles.InputStyle1}
                    placeholder='Marca'
                    value = {this.state.marca}></TextInput>

                <Button title="+" onPress = { async () => {
                    this.props.navigation.navigate("MarcasView", {
                        SMarca: this.SMarca
                    });
                }} />
            </View>
               
            {/** OPCIONES */}
            <Button title="Guardar" onPress={async () => {               
                await this.props.route.params.GuardarContenido(this.Bloque, this.Contenido);
                await this.props.route.params.actualizarContenidos();                
            }} />

            <Button title="Cancelar" onPress={() => {
                this.props.navigation.navigate("DetalleCursoView");
            }} />
            
        </View>;
    }
}

export { NewProductosView }

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
    fontSize: 15
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
    borderRadius: 3,
    borderColor: '#2196f3',
    margin: 4
    }
});