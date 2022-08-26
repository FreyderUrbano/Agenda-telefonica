import { mongo } from 'mongoose';
import React, { useState } from 'react'
import { Text, View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import mongoose from 'mongoose';


const CreateUserScream = (props) => {

    const [state, setState] = useState({
        name: '',
        movil: '',
        email: '',
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const SaveNewUser = async () => {
        if (state.name === '') {
            alert('NOMBRE PLEASE')
        } else {
            await mongoose.db.collection('users').add({
                name: state.name,
                movil: state.movil,
                email: state.email,
            })
            props.navigation.navigate('UserList')
        }

    }



    return (
        <ScrollView style={styles.container}>
            <View style={styles.model}>
                <TextInput placeholder="Nombre"
                    onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            <View style={styles.model}>
                <TextInput placeholder="Movil"
                    onChangeText={(value) => handleChangeText('movil', value)} />
            </View>
            <View style={styles.model}>
                <TextInput placeholder="Email"
                    onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View>
                <Button title="Agregar Usuario"
                    onPress={() => SaveNewUser()} />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: 'white',
        paddingTop: 100,
    },
    model: {
        height: 50,
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#EBEDEF',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        paddingLeft: 20,
    }
})
export default CreateUserScream