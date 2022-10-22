import React from "react";
import { Image,Text, StyleSheet, Dimensions, View } from "react-native";

import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo}){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>{titulo}</Text>
        </>
}

const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height:578 / 768 * width,

    },
    titulo:{
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 40
    },
});