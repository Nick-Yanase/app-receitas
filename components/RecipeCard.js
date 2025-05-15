import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RecipeCard({navigation, nome, descricao, tempo_total, ingredientes, passo_a_passo, image}) {
  return (
    <TouchableOpacity style={styles.recipe_container} onPress={() => navigation.navigate("Details")}>
      <Image
        source={image}
        style={{ width: 70, height: 70, borderRadius: 12 }}
      />
      <Text style={styles.tituloCard}>{nome}</Text>

      <View style={styles.recipe_card_container}>
        <MaterialIcons name="schedule" color={"#909090"} size={20} />
        <Text style={styles.sub_tituloCard}>{tempo_total}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    tituloCard: {
    fontSize: 16,
    fontWeight: '600',
    flex:1
  },
  sub_tituloCard: {
    fontSize: 14,
    fontWeight: '600',
    color: "#909090"
  },
  recipe_container: {
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    borderColor: '#cecece',                                  
    alignItems: 'center',
    width: '100%',
    justifyContent: 'start',
    gap: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingBottom: 16
  },
  recipe_card_container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2
  },
});


