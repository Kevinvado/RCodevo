import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardProductosView = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de producto: {props.data.Nombre_producto}</Text>

        <Button onPress={() => {
             props.sp ? props.SeleccionProducto(props.data.PKProducto, props.data.NombreProducto) : false
            }} title = {
                props.sp ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver detalles</Text>
            }>
       </Button>

    </View>);
}

export { CardProductosView }

const styles = StyleSheet.create({
    CardStyle: {
        justifyContent: "center",
        margin: 14,
        borderWidth: 1,
        padding: 12,
        borderRadius: 2,
        borderColor: 'teal',
        marginTop: 4,
        marginBottom: 4
    }, Title: {
        color: "black",
        fontSize: 20
    }, Atribute: {
        color: "grey",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "grey",
        fontSize: 12
    }
    
});
