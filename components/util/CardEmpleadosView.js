import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardEmpleadosView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de empleado: {props.data.Nombre_Empleado}</Text>
        <Text style = {styles.Atribute}>Direccion: {props.data.Direccion_Empleado}</Text>
        <Text style = {styles.Atribute}>Telefono: {props.data.Telefono_Empleado}</Text>
        <Text style = {styles.Atribute}>Email: {props.data.Email_Empleado}</Text>
        
        <Button onPress={() => {
             props.selected ? props.SEmpleado(props.data.codigo_Empleado, props.data.Nombre_Empleado) : false /* metodo de detalles de producto */
            }} title = {
                props.selected ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver mas</Text>
            }>
       </Button>

    </View>);
}

export { CardEmpleadosView }

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
