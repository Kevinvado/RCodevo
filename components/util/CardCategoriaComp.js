import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CardCategoriaComp = (props) => {
    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de categoria: {props.data.Nombre_Categoria}</Text>
        <Text style = {styles.Atribute}>Descripcion: {props.data.Descripcion}</Text>

        <Button onPress={() => {
             props.sp ? props.SCategoria(props.data.codigo_Categoria, props.data.Nombre_Categoria) : false
            }} title = {
                props.sp ? <Text style = {styles.ButtonText}>Seleccionar</Text> : <Text style = {styles.ButtonText}>Ver detalles</Text>
            }>
       </Button>

    </View>);
}

export { CardCategoriaComp }

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
