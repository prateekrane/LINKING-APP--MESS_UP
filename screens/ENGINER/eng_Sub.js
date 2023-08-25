import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Aisub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://tome.app/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FREE PPT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://tome.app/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>Text into Memes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.poised.com/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>Improve your Communicarion skills</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Linking.openURL("https://www.lalal.ai/?fp_ref=siddharth70")
        }
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>Vocal Remover</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => Linking.openURL("https://www.sembly.ai/")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>Extract Points From Live Lectures</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Aisub;

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
