import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import recipes from '../data/recipes'; 
import * as Animatable from 'react-native-animatable';
import RecipeCard from '../components/RecipeCard';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}
      >
        <Animatable.Text animation="fadeInDown" style={styles.titulo}>
         🥪 Outdoor recipes 🍪
        </Animatable.Text>

        <Animatable.Text animation="fadeIn" delay={300} style={styles.text}>
          Receitas deliciosas para você fazer ao <Text style={styles.text_enfase}>ar livre</Text>, confira abaixo
        </Animatable.Text>

        {
          recipes.map((recipe, index) => (
            
            <Animatable.View 
              key={recipe.id}
              animation="fadeInUp"
              delay={index * 100}
              
            >
              <RecipeCard
                key={recipe.id}
                {...recipe}
              />
            </Animatable.View>

            ) 
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#565656',
    textAlign: 'center',
    marginBottom: 10
  },
  text_enfase: {
    fontSize: 14,
    fontWeight: '600',
    color: '#454545',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
  },
  btn_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  botao: {                              
    backgroundColor: '#3e22ce',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
