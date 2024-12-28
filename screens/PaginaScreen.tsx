import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/crash.json'
import Targeta from '../components/Targeta'

export default function PaginaScreen() {
  //console.log(datos);

  return (
    <View>
      <Text>PaginaScreen</Text>
      <FlatList
        data={datos}
        renderItem={ ({item}) => 
        <Targeta informacion = {item} />
    }/>
    </View>
  )
}

const styles = StyleSheet.create({})