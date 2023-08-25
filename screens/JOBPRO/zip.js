import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Zip = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/ziplogo.png")}
        style={{ height: 150, width: 300, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>ZIP RECRUITER</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            ZipRecruiter, launched in 2010, is an online job marketplace
            connecting employers with job seekers. It simplifies the hiring
            process by allowing employers to post job listings that are
            distributed to various job boards. Job seekers can create profiles
            and apply for positions directly through the platform. ZipRecruiter
            uses AI to match candidates to relevant job opportunities. Its
            streamlined approach and wide reach have made it a popular choice
            for both employers and job seekers. While my information is accurate
            as of September 2021, check current sources for the latest details
            on ZipRecruiter's services and features.
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
              Linking.openURL("https://www.ziprecruiter.in/profiles/sign_in")
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

export default Zip;

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
