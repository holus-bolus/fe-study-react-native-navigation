import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text>{duration} m</Text>
      <Text>{complexity.toUpperCase()}</Text>
      <Text>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
