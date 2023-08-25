import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobSub = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Linkdin")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>LINKDIN</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("IndeedJob")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>INDEED JOB</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Glassdoor")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>GLASS DOOR</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Zip")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>ZIP RECRUITER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Monster")}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.txt}>MONSTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JobSub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 50,
    width: "80%",
    backgroundColor: "yellow",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txt: {
    fontFamily: "front",
    fontSize: 20,
    textAlign: "center",
  },
});
