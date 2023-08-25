import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Timesub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://imgur.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>SOCIAL GOSSIPS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://lifehacker.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>LIFE UPDATES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.wikihow.com/Main-Page")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ASK ANYTHING</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://stars.chromeexperiments.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>TOUR OF UNIVERSE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.howstuffworks.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>HOW STUFF WORKS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Timesub;

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
