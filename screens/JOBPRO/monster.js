import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Monster = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/monsterlogo.png")}
        style={{ height: 100, width: 350, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>MONSTER</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Monster, established in 1999, is a well-known online job search and
            career platform. It offers job seekers the ability to search for job
            listings, upload resumes, and apply for positions. Employers can
            post job openings and access a database of resumes. Monster also
            provides career advice, company profiles, and salary information. It
            has been a prominent resource in the job market, connecting
            individuals with opportunities across various industries. Please
            verify the most current information, as my knowledge is based on
            data available until September 2021.
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
            onPress={() => Linking.openURL("https://www.foundit.in/#")}
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

export default Monster;

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
