import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upercontent}>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text style={styles.txt}>MESSUP MENU</Text>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <ScrollView style={{ height: "90%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("SocialSub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Social Platforms</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("JobSub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>JOB Platform</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("NewsSub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Social News</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("WideSub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>World Wide News</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Sub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Entertainment</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Timesub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Time Pass</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Hack")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>HACK MOD</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Astsub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Astrologer</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Aisub")}>
              <View style={styles.box}>
                <View style={{ width: "100%" }}>
                  <Text style={styles.inner}>Ai</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Telsub")}>
              <View style={{ width: "100%" }}>
                <View style={styles.box}>
                  <View style={{ width: "100%" }}>
                    <Text style={styles.inner}>Telegram Channel</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  upercontent: {
    width: "100%",
    height: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontFamily: "front",
    fontSize: 25,
    textAlign: "center",
    color: "yellow",
    marginTop: 25,
  },
  box: {
    height: 180,
    width: 180,
    backgroundColor: "yellow",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    fontFamily: "front",
    fontSize: 20,
    textAlign: "center",
  },
});
