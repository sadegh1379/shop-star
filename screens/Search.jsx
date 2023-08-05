import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchWrapper}>
        <Ionicons style={styles.search} name="camera-outline" size={24} />
        <TextInput
          style={styles.input}
          placeholder="What are you looking for?"
          value=""
          autoFocus
        />
        <TouchableOpacity style={styles.camera}>
          <Feather color={COLORS.white} name="search" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Search;
const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: SIZES.xSmall - 5,
    borderRadius: SIZES.small,
  },
  search: {
    marginLeft: 5,
    color: COLORS.gray,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: "regular",
  },
  camera: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: SIZES.small,
    color: COLORS.white,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
