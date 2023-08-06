import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
            }}
          />
        </View>
        <View style={styles.details}>  
            <Text style={styles.title} numberOfLines={1}>Name</Text>
            <Text style={styles.subtitle} numberOfLines={1}>product</Text>
            <Text style={styles.price} numberOfLines={1}>$33,012</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={44} color={COLORS.primary}/>
        </TouchableOpacity>  
      </View>
    </TouchableOpacity>
  );
};
export default ProductCardView;
const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    backgroundColor: COLORS.secondary,
    marginEnd: 22,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    padding: SIZES.small - 6
  },
  title:{
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 1,
  },
  subtitle:{
    fontFamily: 'regular',
    fontSize: SIZES.small,
    marginBottom: 1,
    color: COLORS.gray
  },
  price:{
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    right: SIZES.xSmall,
    bottom: SIZES.xSmall,
  }
});
