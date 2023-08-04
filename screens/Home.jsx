import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity>
            <Ionicons name="location-outline" size={24} />
          </TouchableOpacity>
          <Text style={styles.location}>Tehran Iran</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.count}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
