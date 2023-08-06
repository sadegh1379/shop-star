import { FlatList, StyleSheet, Text, View } from "react-native";
import { SIZES } from "../../constants";
import ProductCardView from "../card/ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5];
  return (
    <View style={{ marginTop: SIZES.xSmall }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.small }}
      />
    </View>
  );
};
export default ProductRow;
const styles = StyleSheet.create({});
