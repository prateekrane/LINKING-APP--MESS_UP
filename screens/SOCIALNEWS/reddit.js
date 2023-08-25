import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Reddit = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/redditlogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>REDDIT</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Reddit, founded in 2005, is a social media platform where users
            share, discuss, and vote on content in various interest-based
            communities called "subreddits." Users can post text, links, images,
            and videos, initiating discussions. Upvotes and downvotes determine
            content visibility. Its diverse communities cover topics from news
            to hobbies, fostering engagement and information exchange. AMAs (Ask
            Me Anything) enable interactions with notable individuals. With a
            distinct and often humorous culture, Reddit's influence on internet
            culture is significant. However, it has also faced challenges
            related to moderation, misinformation, and toxicity. As of my last
            update in September 2021, Reddit remains a prominent hub for online
            interaction.
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
            onPress={() => Linking.openURL("https://www.reddit.com/login/")}
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

export default Reddit;

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
