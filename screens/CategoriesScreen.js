import {FlatList, View, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderGridItem = (itemData) => {
	return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
}

const CategoriesScreen = () => {
	return (
		<View>
			<FlatList
				data={CATEGORIES}
				renderItem={renderGridItem}
				keyExtractor={(item) => item.id}
				numColumns={2}/>
		</View>);
};

export default CategoriesScreen;


