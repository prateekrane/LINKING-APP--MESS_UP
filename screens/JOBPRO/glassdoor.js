import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Glassdoor = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/glassdoorlogo.png")}
        style={{ height: 100, width: 100, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>GLASS DOOR</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Glassdoor, founded in 2007, is a platform that provides insights
            into companies and jobs. It offers reviews and ratings from
            employees, giving job seekers an inside look at company culture,
            salaries, and work conditions. Additionally, Glassdoor lists job
            openings and allows users to submit their resumes. It's a valuable
            resource for individuals researching potential employers and seeking
            job opportunities. While my knowledge is based on information
            available until September 2021, Glassdoor's features and impact on
            job searching and company assessment remain notable. For the latest
            details, consult current sources.
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
                "https://secure.indeed.com/auth?hl=en_US&service=my&co=US&continue=https%3A%2F%2Fwww.indeed.com%2F"
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

export default Glassdoor;

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
