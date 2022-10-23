import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrela({
    onPress,
    desabilitado = true,
    preenchida,
    grande = false,
}){
    const estilos = estilosFunction(grande);

    const getImage = () => {
        if(preenchida){
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
            onPress={onPress}
            disabled={desabilitado}
            >
            <Image source={getImage()} style={estilos.estrela}/>
</TouchableOpacity>
}

const estilosFunction = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
})