import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { COLORS, SIZES } from '../../constants'
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Find The Most</Text>
        <Text style={styles.subTitle}>Luxurious Furniture</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%"
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.xxLarge - 6,
    color: COLORS.black,
    marginTop: SIZES.xSmall,
    marginHorizontal: 12,
  },
  subTitle: {
    fontFamily: 'bold',
    fontSize: SIZES.xxLarge - 6,
    color: COLORS.primary,
    marginTop: 0,
    marginHorizontal: 12,
  }
})
export default Welcome