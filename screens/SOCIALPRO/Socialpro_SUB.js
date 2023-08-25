import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SocialSub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Insta")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>INSTAGRAM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Facebook")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FACEBOOK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Flickr")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>FLICKR</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("VSCO")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>VSCO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Behance")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>BEHANCE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialSub;

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
