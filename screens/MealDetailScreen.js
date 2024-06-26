import { Image, Text, StyleSheet, ScrollView, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import FavoritesContext from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealTitle;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const favoriteMealsContext = useContext(FavoritesContext);
  const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const headerButtonPressHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <IconButton
        iconName="star"
        color="white"
        onPress={headerButtonPressHandler}
      />
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
      </View>
      <View style={styles.bottomSpacing}>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
    marginBottom: 8,
  },
  bottomSpacing: {
    marginBottom: 40,
  },
});
