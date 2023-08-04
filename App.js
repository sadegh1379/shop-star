import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoadded] = useFonts({
    'regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'light': require("./assets/fonts/Poppins-Light.ttf"),
    'medium': require("./assets/fonts/Poppins-Medium.ttf"),
    'bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'semiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
    'extraBold': require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoadded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoadded]);

  if (!fontLoadded) {
    return null;
  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
