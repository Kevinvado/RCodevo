import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import { Button } from 'react-native-web';

const CardProductosView = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de producto: {props.data.NombreProducto}</Text>
        <Text style = {styles.Atribute}>Descripcion: {props.data.Descripcion}</Text>
        
        <Button onPress={() => {
             props.selecct ? props.SeleccionProducto(props.data.PKProducto, props.data.NombreProducto) : false
            }} >
                {
                    props.selecct ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Mas informacion</Text>
                }
            
       </Button>

    </View>);
}

export { CardProductosView }

const styles = StyleSheet.create({
    CardStyle: {
        justifyContent: "center",
        borderWidth: 2,
        margin: 14,
        padding: 12, 
        borderRadius: 6,
        marginTop: 4,
        marginBottom: 4
    }, Title: {
        color: "back",
        fontSize: 26
    }, Atribute: {
        color: "black",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "black",
        fontSize: 12
    }
    
});
