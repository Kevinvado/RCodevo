import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardProveedoresView = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de proveedor: {props.data.Nombre_Proveedor}</Text>
        <Text style = {styles.Atribute}>Telefono: {props.data.Telefono_Proveedor}</Text>
        <Text style = {styles.Atribute}>Direccion: {props.data.Direccion_Proveedor}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.Estado_proveedor}</Text>
        
        <Button onPress={() => {
             props.selected ? props.SProveedor(props.data.codigo_Proveedor, props.data.Nombre_Proveedor) : false /* metodo de detalles de producto */
            }} title = {
                props.selected ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver mas</Text>
            }>
       </Button>

    </View>);
}

export { CardProveedoresView }

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
