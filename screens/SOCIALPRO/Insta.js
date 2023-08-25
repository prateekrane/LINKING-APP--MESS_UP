import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Insta = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/instalogo.png")}
        style={{ height: 150, width: 150, marginTop: 20 }}
      />
      <Text style={styles.uptxt}>INSTAGRAM</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Instagram is a widely used social media platform that revolves
            around sharing photos and videos. Users create profiles, share their
            visual content with followers, and engage through likes and
            comments. The platform features a main feed displaying posts from
            followed accounts, along with Stories—short-lived images and
            videos—and IGTV for longer content. Instagram's Explore page
            suggests content based on interests, and Direct Messaging enables
            private conversations. Popular among individuals, businesses, and
            influencers, Instagram's visual focus and creative features have
            made it a hub for self-expression and digital marketing. Please
            verify with current sources, as details may have changed since
            September 2021.
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
            onPress={() =>
              Linking.openURL("https://www.instagram.com/accounts/login/")
            }
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

export default Insta;

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
    marginTop: -30,
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
