import React from 'react';
import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import Cesta from './src/screens/Cesta/Index.js'

import mocks from './src/mocks/cesta.js'

export default function App() {
  return <SafeAreaView style={ estilo }>
    <StatusBar/>
    <Cesta {...mocks}/>
  </SafeAreaView>
}

const estilo = StyleSheet.create({flex:1});

