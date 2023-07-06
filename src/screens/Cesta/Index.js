import React from "react";
import { View,StyleSheet, FlatList } from "react-native";

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Alimentos from "./components/Alimentos";
import Texto from "../../components/Texto";

export default function Cesta({ topo, descricao, itens}) {
    return <>
        <FlatList data={ itens.lista }
                            renderItem={({item}) => <Alimentos {...item}/> }
                            keyExtractor={({nome}) => nome}
                            ListHeaderComponent={ <>
                                <Topo {...topo}/>
                                <View style={ estilo.cesta }>
                                    <Detalhes {...descricao}/>
                                </View>
                                <Texto style={ estilo.titulo }>{ itens.titulo }</Texto>
                            </> 
                        } 
        />
    </>
}

const estilo = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 32,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#464646',
    },
}); 