import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Targeta2 from '../components/Targeta2';


export default function Pagina2Screen() {

  const [datos, setDatos] = useState({})

  useEffect(() => {
    async function leer(){
      const resp = await fetch('https://api.sampleapis.com/futurama/info');
      const json = await resp.json();
      setDatos(json);
    }
    leer()
    //console.log(datos);
    
  }, [])
  

  return (
    <View>
      <Text>Pagina2Screen</Text>
      <FlatList
        data = { datos }
        renderItem={ ({item}) => 
        <Targeta2 datos={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})