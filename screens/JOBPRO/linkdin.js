import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Linkdin = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/linkdinlogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>LINKDIN</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            LinkedIn, founded in 2002, is a professional networking platform. It
            focuses on connecting individuals for career-related purposes. Users
            create profiles resembling digital resumes, highlighting their
            skills, work experience, and education. LinkedIn facilitates
            connections with colleagues, industry peers, and potential
            employers. It also offers job listings, company pages, and content
            sharing to foster professional development and networking. While my
            knowledge is based on information available until September 2021,
            LinkedIn's features and impact on professional networking remain
            relevant. For the latest details, consult current sources.
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
            onPress={() => Linking.openURL("https://www.linkedin.com/login")}
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

export default Linkdin;

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
