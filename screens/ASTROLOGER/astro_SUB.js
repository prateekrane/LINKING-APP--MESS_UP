import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Astsub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Jeffrey")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>JEFFREY CELAVIE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Clickastro")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>CLICKASTRO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Astrotalk")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ASTRO TALK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Astsub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 50,
    width: "80%",
    backgroundColor: "yellow",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txt: {
    fontFamily: "front",
    fontSize: 20,
    textAlign: "center",
  },
});
