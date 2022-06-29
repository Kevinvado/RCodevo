import { StyleSheet, Text, View, TouchableOpacity , TextInput, Button } from 'react-native';

const LoginView = (props) => {

    return (<View style={styles.CardStyle}>
        <Text style = {styles.Title}>Administracion</Text>
        <Text style = {styles.Banner}>Repuestos Codevo</Text>

        <View style = {styles.form_div}>

                <View style={styles.form_control}>
                    <TextInput style = {styles.form_input} placeholder="Email" />
                    
                </View>

                <View style={styles.form_control}>
                    <TextInput style = {styles.form_input} placeholder="Contraseña" />
                    
                </View>

                <View style={styles.form_control}>
                    <TextInput type="checkbox" name="remember" />
                    <Text >Recordar sesion</Text>
                </View>

                <View style={styles.form_control}>
                    <Button title='Iniciar sesion' onPress={() => {
                props.navigation.navigate('MainView');
                }}></Button>
                </View>

                <View style={styles.form_control}>
                    <Text style = { styles.Text_item}>Se te olvidó tu contraseña</Text>
                    <Text style = { styles.Text_item}>Crear una cuenta</Text>
                </View>
            </View>

        </View>
   );
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
    form_div: {
        flex: 4
    },
    form_control: {
        marginTop: 30,
        position: 'relative'
    },
    form_input: {
        padding: 10,
        fontSize: '1.2rem',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "teal"
    },
    Text_item: {
        color: 'blue'
    }

});