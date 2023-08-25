import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const IndeedJob = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Indeedlogo.png")}
        style={{ height: 150, width: 280, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>INDEED JOB</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Indeed, established in 2004, is a leading online job search
            platform. It aggregates job listings from various sources, offering
            a comprehensive database of opportunities across industries and
            locations. Users can search for jobs, upload resumes, and set up job
            alerts based on their preferences. Employers can post job openings
            and review candidate applications. Indeed's user-friendly interface
            and extensive job offerings have made it a go-to resource for job
            seekers and employers alike. Note that updates may have occurred
            since September 2021; refer to current sources for the latest
            information on Indeed's services and features.
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

export default IndeedJob;

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
