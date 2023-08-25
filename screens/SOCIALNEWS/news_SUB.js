import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const NewsSub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Reddit")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>REDDIT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Twitter")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>TWITTER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Thread")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>THREAD</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Bluesky")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>BLUE SKY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Spill")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>SPILL</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsSub;

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
