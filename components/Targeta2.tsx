import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Targeta2(props : any) {
    //console.log(props.datos.name.first);
    
    const [visible, setvisible] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={() => setvisible(true)}>
      <Text style={styles.TextName}>{props.datos.name.first}{props.datos.name.first}</Text>
      <Modal visible={visible} >
    <View style={styles.modal}>
        <Text>style={styles.TextName}{props.datos.name.first}</Text>

        <Button title='CERRAR' onPress={() => setvisible(false)}/>
    </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    TextName:{
        fontSize:30,
    },
    container:{
        backgroundColor:'#82f384',
        margin:5
    },
    modal:{
        backgroundColor:'#9dfbe5',
        flex:1
    },
    img:{
        
    }
})