import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
