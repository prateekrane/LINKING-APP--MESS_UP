import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Hack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://4download.net/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>PAID SOFTWARE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.wifimap.io/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FREE Wi-Fi AREA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://smartserials.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ANY PRODUCT KEY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Linking.openURL("https://spotigeek.com/spotify-premium-apk-download/")
        }
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>SPOTIFY PREMIUM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://hotpot.ai/colorize-picture")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>BLACK & WHITE CONVERTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Hack;

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
