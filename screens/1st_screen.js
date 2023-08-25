import { Touchable, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MenuScreen from "./menuscreen";
import { LinearGradient } from "expo-linear-gradient";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", justifyContent: "center" }}>
        <Text style={styles.uper}>MESS UP!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
        <View style={styles.btn}>
          <AntDesign name="arrowright" size={40} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  uper: {
    color: "yellow",
    fontFamily: "front",
    fontSize: 40,
    textAlign: "center",
  },
  btn: {
    marginTop: 45,
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
