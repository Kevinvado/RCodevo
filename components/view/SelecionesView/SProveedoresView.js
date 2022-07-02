import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

//Components
import { CardProveedoresView } from '../../util/CardProveedoresView'
//Models
import { TblProveedor } from '../../../model/TblProveedor';

class SProveedoresView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblProveedor = new TblProveedor();
        this.Cargar();
    }

    Cargar = async (param = "") => {
        const lista = await this.TblProveedor.Get(param);

        this.setState({
            isLoading: false,
            Dataset: lista
        });

    }

    SProveedor = async (id, name) => {
        console.log(id, name);
        this.props.route.params.SProveedor(id, name);
        this.props.navigation.navigate("NuevaCompra");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar proveedor'
            onChangeText = { val => this.Cargar(val)}></TextInput>
            
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardProveedoresView key = {c.codigo_Proveedor}
                     data = { c } SProveedor = {this.SProveedor} selected = { true } />
                )}
        </ScrollView> )
    }
}

export { SProveedoresView }

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