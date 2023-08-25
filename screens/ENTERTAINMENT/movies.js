import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Movies = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/pikashowlogo.png")}
        style={{ height: 100, width: 100, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>PIKA SHOW</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Pika Show is/was a mobile application used for streaming movies and
            TV shows. It allowed users to watch a wide range of content,
            including popular films and series, on their smartphones or tablets.
            The app offered a user-friendly interface and categorized content
            for easy navigation. However, it's important to note that depending
            on your location and the content available, the legality of such
            streaming apps can vary, and some might provide copyrighted material
            without proper authorization. Always ensure you are using legal and
            authorized platforms to access and enjoy entertainment content.
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
            onPress={() => Linking.openURL("https://www.pikashows.download/")}
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

export default Movies;

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
