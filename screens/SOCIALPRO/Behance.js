import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const Behance = ({ navigtion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Behancelogo.png")}
        style={{ height: 150, width: 150, marginTop: 50 }}
      />
      <Text style={styles.uptxt}>BEHANCE</Text>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={styles.infotext}>
            Behance, established in 2006, is an online platform for showcasing
            and discovering creative work. It serves as a portfolio space for
            artists, designers, and other creatives to display their projects,
            from graphic design to photography and more. Behance allows users to
            curate their work, receive feedback, and connect with potential
            clients and collaborators. It's a hub for inspiration and networking
            in the creative industry. Keep in mind that developments may have
            occurred since September 2021, so refer to the latest sources for
            the most current information.
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
                "https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fgallery%252F58902999%252FLogin%253Fisa0%253D1%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%25223042a9e3-ae17-493e-a41e-62a36121674f%2522%252C%2522timestamp%2522%253A%25221692382736026%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signIn%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.38.0-17-g633319d%2522%252C%2522nonce%2522%253A%25221974903175356655%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%223042a9e3-ae17-493e-a41e-62a36121674f%22%2C%22timestamp%22%3A%221692382736026%22%2C%22context%22%3A%7B%22intent%22%3A%22signIn%22%7D%2C%22jslibver%22%3A%22v2-v0.38.0-17-g633319d%22%2C%22nonce%22%3A%221974903175356655%22%7D&relay=477c0fbc-8249-427f-a9bf-2c8674922a3f&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fgallery%2F58902999%2FLogin%3Fisa0%3D1%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/"
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

export default Behance;

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
