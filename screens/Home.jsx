import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/product/ProductRow";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity>
            <Ionicons name="location-outline" size={30} />
          </TouchableOpacity>
          <Text style={styles.location}>Tehran Iran</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.count}>8</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    backgroundColor: "green",
    width: 16,
    height: 16,
    borderRadius: 8,
    bottom: 16,
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    color: COLORS.lightWhite,
    fontWeight: "600",
    fontFamily: "regular",
    fontSize: 10,
  },
});
