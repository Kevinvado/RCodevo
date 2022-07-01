import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';


//Componentes
import { CardCategoriaComp } from '../util/CardCategoriaComp';

//Models
import { TblCategoria } from '../../model/TblCategoria';

class CategoriasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            isLoading: true,
            Dataset: [],
            estado: this.props.route.params ?? false
        }

        this.TblCategoria = new TblCategoria();
        this.Cargar();
    }

    Cargar = async (param = "") => {
        const list = await this.TblCategoria.Get(param);

        this.setState({
            isLoading: false,
            Dataset: list
        });

    }

    SCategoria = async (id, name) => {
        this.props.route.params.SCategoria(id, name);
        this.props.navigation.navigate("Nuevo Producto");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar categoria'
            onChangeText = { val => this.Cargar(val)}></TextInput>

            <View style = { styles.form_control}>
                <Button title = 'Nueva categoria'></Button>
            </View>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardCategoriaComp key = {c.codigo_Categoria}
                     data = { c } SCategoria = { this.SCategoria } sp = { this.state.estado } />
                )}
        </ScrollView> )
    }
}

export { CategoriasView }

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