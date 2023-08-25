import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./screens/1st_screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  const [fontsloaded] = useFonts({
    front: require("./assets/fonts/KaushanScript-Regular.ttf"),
    icontxt: require("./assets/fonts/TiltPrism-Regular.ttf"),
    infotxt: require("./assets/fonts/IndieFlower-Regular.ttf"),
  });
  if (!fontsloaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"black"} />
      <RootNavigator />
    </NavigationContainer>
  );
}
