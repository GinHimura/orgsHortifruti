import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto( { children, style } ) {
    let estilo = estilos.texto;
    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

var estilos = StyleSheet.create({
    texto: {
        fontFamily:'Montserrat-Regular',
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: "normal",
    }
});