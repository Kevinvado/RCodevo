import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardMarcaComp = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de marca: {props.data.Nombre_Marca}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.Estado_Marca}</Text>

        <Button onPress={() => {
             props.sp ? props.SMarca(props.data.codigo_MarcaProducto, props.data.Nombre_Marca) : false
            }} title = {
                props.sp ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver detalles</Text>
            }>
       </Button>

    </View>);
}

export { CardMarcaComp }

const styles = StyleSheet.create({
    CardStyle: {
        justifyContent: "center",
        margin: 14,
        padding: 12,
        backgroundColor: 'teal',
        borderRadius: 2,
        marginTop: 4,
        marginBottom: 4
    }, Title: {
        color: "white",
        fontSize: 22
    }, Atribute: {
        color: "white",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "white",
        fontSize: 12
    }
    
});
