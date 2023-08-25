import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const WideSub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Linking.openURL("https://timesofindia.indiatimes.com/?from=mdr")
        }
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>TIMES OF INDIA</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Linking.openURL("https://www.nytimes.com/international/")
        }
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>NEWYORK TIMES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.usatoday.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>USA TODAY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.hindustantimes.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>HINDUSTAN TIMES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://indianexpress.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>INDIAN EXPRESS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WideSub;

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
