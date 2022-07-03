import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView, TextInput } from 'react-native';

//Componentes

class CardComp extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.obj = this.props.obj;
        this.CargarProducto();

    }

    CargarProducto = async () => {
      const list = await this.obj.TblProducto.get();
    
      this.setState({
          Dataset: list
      });
  }

    render() {

        return (<View>
             {
            this.state.Dataset.map(m => 
                <Text key = {m.codigo_Producto} style = {{fontSize: 18, color: 'white'}}>Nombre de producto: {m.Nombre_producto}</Text> )
             }
            
        </View>)
    }
}

export { CardComp }

