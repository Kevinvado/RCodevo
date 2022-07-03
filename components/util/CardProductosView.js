import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardProductosView = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de producto: {props.data.Nombre_producto}</Text>
        <Text style = {styles.Title}>Estado: {props.data.Estado_Producto}</Text>

        <Button onPress={() => {
             props.selected ? props.SProducto(props.data.codigo_Producto, props.data.Nombre_producto) : props.Load(props.data);
            }} title = {
                props.selected ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver detalles</Text>
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
