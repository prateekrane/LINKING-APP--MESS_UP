import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Flickr = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/flickrlogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>FLICKR</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Flickr, established in 2004, is a photo and video hosting platform.
            Users upload and share visual content, organized into albums and
            tagged with keywords. It was among the first to popularize social
            photo-sharing, offering a space for photographers and enthusiasts to
            showcase their work. Flickr allows both public and private sharing,
            fostering communities of like-minded creators. While known for its
            vibrant photography community and diverse content, please verify
            current features and usage, as my knowledge is based on information
            available until September 2021.
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
              Linking.openURL(
                "https://identity.flickr.com/login?redir=https%3A%2F%2Fwww.google.com%2F"
              )
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

export default Flickr;

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
