import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Clickastro = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/clickastrologo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>CLICKASTRO</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Clickastro presents free online astrology services, including an
            online astrology birth chart. The report provides astute and precise
            predictions and is simple and easy to understan
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
                "https://www.clickastro.com/medium-cpc/free-career-predictions?rf=gads-sitelink-career&gclid=CjwKCAjw5_GmBhBIEiwA5QSMxNYpOZz7JlhUHVXPuiNrOJ2AP0EYHRnW_Mrd_km7oTgOE0UY5yM3IhoCk_cQAvD_BwE"
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

export default Clickastro;

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
