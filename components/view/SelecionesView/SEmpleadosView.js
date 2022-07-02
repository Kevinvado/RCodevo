import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

//Components
import { CardEmpleadosView } from '../../util/CardEmpleadosView'
//Models
import { TblEmpleado } from '../../../model/TblEmpleado';

class SEmpleadosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblEmpleado = new TblEmpleado();
        this.Cargar();
    }

    Cargar = async (param = "") => {
        const lista = await this.TblEmpleado.Get(param);

        this.setState({
            isLoading: false,
            Dataset: lista
        });

    }

    SEmpleado = async (id, name) => {
        console.log(id, name);
        this.props.route.params.SEmpleado(id, name);
        this.props.navigation.navigate("NuevaCompra");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar empleado'
            onChangeText = { val => this.Cargar(val)}></TextInput>
            
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardEmpleadosView key = { c.codigo_Empleado }
                     data = { c } SEmpleado = {this.SEmpleado} selected = { true } />
                )}
        </ScrollView> )
    }
}

export { SEmpleadosView }

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