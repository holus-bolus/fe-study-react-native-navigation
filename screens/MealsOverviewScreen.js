import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

/**
 *
 * @param route
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute()
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
