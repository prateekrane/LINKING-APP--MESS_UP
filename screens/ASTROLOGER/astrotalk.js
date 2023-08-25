import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Astrotalk = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/astrotalklogo.png")}
        style={{ height: 100, width: 100, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>ASTROTALK</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            AstroTalk is an online platform that provides personalized
            astrological consultations and services. Users can connect with
            expert astrologers to gain insights into various aspects of their
            lives, such as career, relationships, and personal growth, based on
            their birth chart and planetary positions. The platform offers live
            chats, phone calls, and even reports for users to choose the type of
            consultation they prefer. AstroTalk aims to offer accessible and
            convenient astrology services to individuals seeking guidance and
            understanding through the lens of astrology. Please note that
            experiences and interpretations can vary, as astrology is a
            subjective practice.
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
            onPress={() => Linking.openURL("https://astrotalk.com/")}
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

export default Astrotalk;

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
    marginTop: -10,
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
