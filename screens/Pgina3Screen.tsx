import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pgina3Screen() {

    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    useEffect(() => {
        if(edad < 0){
            setedad(0)
        }

    }, [edad])
    

    function usuario(){
        Alert.alert('mensaje', nombre + ' tiene ' + edad + ' años ') 
    }

  return (
    <View style={styles.container}>
        <Text style={{fontSize:40}}>FORMULARIO</Text>
        <TextInput style={styles.input}
            placeholder='Ingrasar nombre'
            onChangeText={(texto) => setnombre(texto) }
        />
        <TextInput style={styles.input}
            placeholder='Ingrasar edad'
            keyboardType='numeric'
            onChangeText={(texto) => setedad(+texto)}
            //value={edad.toString()}
        />
        <Button title='Aceptar' onPress={() => usuario()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#6666',
        fontSize:25,
        height:50,
        width:'85%'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    }
})