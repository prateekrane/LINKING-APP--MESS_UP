import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Facebook = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/facebooklogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>FACEBOOK</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Facebook, founded in 2004 by Mark Zuckerberg, is a prominent social
            networking site. Users create profiles, connect with friends, and
            post updates, photos, and videos. The News Feed displays content
            from friends, pages, and groups users follow. Facebook offers
            features like reactions, comments, and sharing. It has evolved to
            include marketplace functionality, events, and live streaming. Its
            ecosystem includes Messenger for private messaging and Instagram and
            WhatsApp as subsidiaries. While my knowledge was last updated in
            September 2021, Facebook's features and impact on social interaction
            and digital communication are noteworthy. For the latest details,
            refer to current sources.
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
            onPress={() => Linking.openURL("https://www.facebook.com/login/")}
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

export default Facebook;

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
