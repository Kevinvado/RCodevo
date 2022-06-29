import { StyleSheet, Text, View, TouchableOpacity , TextInput, Image} from 'react-native';

const LoginView = (props) => {

    return (<View style={styles.CardStyle}>
        <Text style = {styles.Title}>Administracion</Text>
        <Text style = {styles.Banner}>Repuestos Codevo</Text>

        <View style = {styles.body_login}>

            <TextInput style = {styles.input} placeholder = "Usuario" />
            <TextInput style = {styles.input} placeholder = "Contraseña" />

        <TouchableOpacity onPress={() => {
                props.navigation.navigate('MainView');
            }}
            style = {styles.Button} >
            <Text style = {styles.ButtonText}>Iniciar sesion</Text>
       </TouchableOpacity>

        </View>
        
    </View>);
}

export { LoginView }

const styles = StyleSheet.create({
    CardStyle: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    Title: {
        flex: 1,
        color: "black",
        fontSize: 30,
        justifyContent: 'center'
    },
    Banner: {
        flex: 1,
        color: "black",
        fontSize: 26,
        justifyContent: 'center',
        textAlign: 'center'
    },
    input: {
        height: 50,
        margin: 12,
        fontSize: 20,
        padding: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 10
      },
    Button: {
        marginRight: 14,
        marginLeft: 14,
        marginTop: 24,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 19
      },
    body_login: {
        marginTop: 10,
       flex: 4
    }
});