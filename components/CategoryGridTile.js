import {Pressable, View, Text, StyleSheet, Platform} from "react-native";

const CategoryGridTile = ({title, color}) => {
	return (
		<View style={[styles.gridItem, {backgroundColor: color}]}>
			<Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
								 android_ripple={{color: '#ccc'}}>
				<View style={styles.innerContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 5,
		backgroundColor: "white",
		elevation: 6,
		overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
	},
	button: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	}
});
