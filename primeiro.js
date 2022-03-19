import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Meu App </Text>
      <Text style={styles.descricao}> Primeiro aplicativo xD </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFF'
  },
  descricao: {
    fontSize: 20,
    color: '#000000'
  }
});
