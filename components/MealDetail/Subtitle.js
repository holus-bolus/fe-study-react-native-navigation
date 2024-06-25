import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: "white",
    textAlign: "center",
  },
});
