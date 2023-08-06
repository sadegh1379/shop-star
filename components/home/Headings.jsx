import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons color={COLORS.primary} name="ios-grid" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Headings;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "semiBold",
    fontSize: SIZES.xLarge - 2,
  },
});
