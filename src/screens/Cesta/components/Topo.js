import React, { useRef } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../components/Texto";

import topo from "../../../../assets/topo.png";

import LottieView from 'lottie-react-native'

const widht = Dimensions.get('screen').width;

const animation = React.createRef

export default function Topo({ titulo }) {
    return <>
        <Image source={ topo } style={ estilo.topo }/>
        <Texto style={ estilo.titulo }>{ titulo }</Texto>
        <LottieView
                source={require('../../../../assets/banana_girl.json')} 
                style={estilo.animacao}
                loop={true}
                ref={animation}
                autoPlay={true}
          />
    </>
}

const estilo = StyleSheet.create({
    topo: {
        width:"100%",
        height: 578 / 768 * widht,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16, 
    },
    animacao: {
        position:'absolute', 
        height:250, 
        marginHorizontal: 43,
        marginVertical: 5
    }
}); 

