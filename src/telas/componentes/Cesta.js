import React from "react";
import { Text, Image, StyleSheet, Dimensions, View, ScrollView, FlatList} from "react-native";

import Detalhes from "./Detalhes";
import Item from "./Item";
import Itens from "./Item";
import Topo from "./topo";

const width = Dimensions.get('screen').width;

export function Cesta({topo, detalhes, itens}){
    return <>
    <ScrollView>
    <FlatList
            data={itens.lista}
            renderItem = {Item}
            keyExtractor = {({nome}) => nome }
            ListHeaderComponent ={() => {
            return<>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                  <Detalhes {...detalhes}/>
                  <Text style={estilos.titulo}>{itens.titulo}</Text>
                </View>
                </>
            }}
            />
    </ScrollView>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height:578 / 768 * width,

    },
    titulo:{
        width: "100%",
        fontSize: 18,
        lineHeight: 26,
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom:8,
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
    }
});
