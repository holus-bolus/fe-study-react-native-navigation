import { View, StyleSheet, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

/**
 *
 * @param route
 * @returns {JSX.Element}
 * @constructor
 */

const MealsOverviewScreen = ({ route }) => {
  // const route = useRoute()
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
