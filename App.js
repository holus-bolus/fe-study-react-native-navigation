import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#24180f" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#24180f",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#24180f",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meal Categories",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
