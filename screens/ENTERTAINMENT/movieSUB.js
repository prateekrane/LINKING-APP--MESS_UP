import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Sub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Movies")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FREE MOVIE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Yandex")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FIND YOURSELF</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://memes.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ONLINE MEMES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.read.gov/books/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FREE BOOKS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sub;

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
