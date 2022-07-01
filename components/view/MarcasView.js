import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

//Componentes
import { CardMarcaComp } from '../util/CardMarcaComp';

//Models
import { TblMarca } from '../../model/TblMarca';

class MarcasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            isLoading: true,
            Dataset: [],
            estado: this.props.route.params ?? false
        }

        this.TblMarca = new TblMarca();
        this.Cargar();
    }

    Cargar = async (param = "") => {
        const list = await this.TblMarca.Get(param);

        this.setState({
            isLoading: false,
            Dataset: list
        });

    }

    SMarca = async (id, name) => {
        this.props.route.params.SMarca(id, name);
        this.props.navigation.navigate("Nuevo Producto");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar marca'
            onChangeText = { val => this.Cargar(val)}></TextInput>

            <View style = { styles.form_control}>
                <Button title = 'Nueva Marca'></Button>
            </View>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardMarcaComp key = {c.codigo_MarcaProducto}
                     data = { c } SMarca = { this.SMarca } sp = { this.state.estado } />
                )}
        </ScrollView> )
    }
}

export { MarcasView }

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