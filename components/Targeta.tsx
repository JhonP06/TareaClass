import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

export default function Targeta( props : any ) {
    //console.log(props.informacion.name);
    
    function detalles(item : any){
        Alert.alert(item.name ,item.description + ' \n \nAtributos: \n' + item.atributos)
    }

  return (
    <TouchableOpacity style={styles.container} onPress={() => detalles(props.informacion)}>
        <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
        <View style={styles.fila}>
            <Image style={styles.img} source = {{ uri: props.informacion.image }}/>
            <Text style={styles.txtDescri}>{props.informacion.description}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color:'#bbb3ea',
        fontWeight:'bold'
    },
    img:{
        height:150,
        width:150,
        resizeMode:'contain'
    },
    container:{
        backgroundColor:'#666',
        margin:2,
        borderRadius:20
    },
    fila:{
        flexDirection:'row',
    },
    txtDescri:{
        color:'withe',
        width: '65%',
        justifyContent:'center',
        fontSize:15,
        textAlign:'justify'
    }
})