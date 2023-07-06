import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";

export default function Alimentos({ nome, imagem}) {
    return<View style={ estilo.item }>
            <Image source={ imagem } accessibilityLabel="nome" style={ estilo.imagem }/>
            <Texto style={ estilo.nome }>{ nome }</Texto>
          </View>
}

const estilo = StyleSheet.create({
    imagem: {
        width: 46,
        height: 46,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center',
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
});