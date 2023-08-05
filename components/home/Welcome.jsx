import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Find The Most</Text>
        <Text style={styles.subTitle}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Feather style={styles.search} name="search" size={24} />
        <TextInput
          style={styles.input}
          placeholder="What are you looking for?"
          value=""
          onPressIn={() => navigation.navigate('Search')}
        />
        <TouchableOpacity style={styles.camera}>
          <Ionicons color={COLORS.white} name="camera-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 6,
    color: COLORS.black,
    marginTop: SIZES.xSmall,
    marginHorizontal: 12,
  },
  subTitle: {
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 6,
    color: COLORS.primary,
    marginTop: -15,
    marginHorizontal: 12,
  },
  searchWrapper: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall - 5,
  },
  search: {
    marginLeft: 5,
    color: COLORS.gray,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: 'regular',
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
export default Welcome;
