import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Thread = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/threadlogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>THREAD</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            A thread in the context of online communication refers to a sequence
            of connected messages or posts that revolve around a specific topic
            or idea. Threads are commonly found on platforms like forums, social
            media, and messaging apps. They allow users to engage in coherent
            discussions by responding to a central post or comment, maintaining
            the conversation's flow and context. Threads help organize and
            compartmentalize diverse viewpoints, making it easier to follow
            conversations, explore detailed discussions, and track the evolution
            of ideas within the digital space. They enhance collaborative
            communication and information exchange across various online
            platforms.
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
            onPress={() => Linking.openURL("https://www.threads.guide/login")}
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

export default Thread;

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
