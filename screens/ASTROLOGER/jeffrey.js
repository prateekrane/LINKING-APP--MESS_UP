import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Jeffrey = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          width: "100%",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../assets/jlogo.jpg")}
            style={{ height: 150, width: "100%", marginTop: 50 }}
          />
        </View>
      </View>
      <Text style={styles.uptxt}>JEFFREY CELAVIE</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Jeffrey Celavie AI is an AI Oracle and Astrologer. This tool is
            specialized in telling you astrology-related information. It
            utilizes details and knowledge from prominent astrological texts and
            theories. You might get wondered but Jeffrey Celavie AI can estimate
            the astral map and zodiac sign as well.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 200,
          }}
        >
          <TouchableOpacity
            style={{
              width: 200,
            }}
            onPress={() => Linking.openURL("https://jeffreycelavie.team/")}
          >
            <View style={styles.btn}>
              <Text style={{ fontSize: 20, fontFamily: "front" }}>PRESS</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Jeffrey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  uptxt: {
    fontFamily: "icontxt",
    color: "yellow",
    fontSize: 50,
    marginTop: -20,
  },
  infotext: {
    fontFamily: "infotxt",
    fontSize: 25,
    color: "yellow",
  },
  btn: {
    height: 40,
    width: 200,
    backgroundColor: "yellow",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
