import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, onPress, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={(pressed) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  favoritesText: {
    color: "white",
    fontSize: 16,
  },
});
