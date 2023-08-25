import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Telsub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://telegram.me/fixmebot")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>GRAMMER CHECKER</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://t.me/PremiumLootDeals")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>BEST SALE!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://t.me/newfileconverterbot")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ALL FILE CONVERTER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://t.me/airtrack_bot")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FLIGHT PRICE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://t.me/eddytravels_bot")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>BEST TRAVELLING PRICE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Telsub;

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
