import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pagina4Screen() {

    const [kelv, setkelv] = useState(0)
    const [celc, setcelc] = useState(0)
    const [fhar, setfhar] = useState(0)

    function avis(){
        setcelc(kelv - 273.15)
        setfhar(((kelv - 273.15)*1.8) + 32)
        Alert.alert('Res' , 'temp' + celc + 'tem °' + fhar)
    }

  return (
    <View>
      <Text>Pagina4Screen</Text>
      <TextInput style={{fontSize:30}}
            placeholder='Ingrasar kelvin'
            keyboardType='numeric'
        />
        <TextInput style={{fontSize:30}}
            placeholder='Ingrasar fahrenheit'
            keyboardType='numeric'
        />
        <Button title='Calcular' onPress={() => avis()}/>
    </View>
  )
}

const styles = StyleSheet.create({})