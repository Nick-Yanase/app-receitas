import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const { nome, descricao, tempo_total, ingredientes, passo_a_passo, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.tempo}>⏱️ {tempo_total}</Text>
      <Text style={styles.descricao}>{descricao}</Text>

      <Text style={styles.subtitulo}>Ingredientes:</Text>
      {ingredientes.map((item, index) => (
        <Text key={index} style={styles.item}>- {item}</Text>
      ))}

      <Text style={styles.subtitulo}>Modo de preparo:</Text>
      {passo_a_passo.map((passo, index) => (
        <Text key={index} style={styles.item}>{index + 1}. {passo}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tempo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  item: {
    fontSize: 14,
    marginBottom: 4,
  },
});
