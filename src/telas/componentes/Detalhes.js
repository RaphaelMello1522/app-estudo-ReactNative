import React from "react";
import { Text, Image, StyleSheet, View, Dimensions, Button, TouchableOpacity } from "react-native";

import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Detalhes({nome, nomeFazenda, imagemFazenda, descricao, preco, botao}){
    return <>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Text style={estilos.descricao}>
            {descricao}
        </Text>
        <Text style={estilos.preco}>{preco}</Text>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.textoBotao}>{botao}</Text>
        </TouchableOpacity>
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
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize:26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        lineHeight: 26,
        fontSize: 16
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color:"#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
});