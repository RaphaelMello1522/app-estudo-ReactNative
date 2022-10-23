import React, { useState } from "react";
import { Text ,Image, StyleSheet, View, TouchableOpacity} from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = true,
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = () =>{
        const listaEstrelas = [];
        for(let i = 0; i < 5; i++) {
            listaEstrelas.push(

            <Estrela 
                key={i}
                onPress={() => setQuantidade(i+1)}
                desabilitado={!editavel}
                preenchida={i < quantidade}
                grande={grande}

            />
            );
        }
        return listaEstrelas;
    }
    return <View style={estilos.estrelas}>
        <RenderEstrelas/>
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    }
})