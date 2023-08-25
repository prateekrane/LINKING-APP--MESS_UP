import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Bluesky = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/blueskylogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>BLUE SKY</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Bluesky is a decentralized social app conceptualized by former
            Twitter CEO Jack Dorsey and developed in parallel with Twitter. The
            social network has a Twitter-like user interface with algorithmic
            choice, a federated design and community-specific moderation.
            Bluesky is using an open source framework built in-house, the AT
            Protocol, meaning people outside of the company have transparency
            into how it is built and what is being developed.
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
            onPress={() => Linking.openURL("https://bsky.app/")}
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

export default Bluesky;

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
