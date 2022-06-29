import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardComprasView = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Fecha de compra: {props.data.Fecha_Compra}</Text>
        <Text style = {styles.Atribute}>Total: {props.data.Total}</Text>
        <Text style = {styles.Atribute}>Iva: {props.data.Iva_Compra}</Text>
        
        <Button onPress={() => { 
            //
        }} title = {<Text style = {styles.ButtonText}>Ver detalles</Text>}>
       </Button>

    </View>);
}

export { CardComprasView }

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
        fontSize: 26
    }, Atribute: {
        color: "white",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "white",
        fontSize: 12
    }
    
});
