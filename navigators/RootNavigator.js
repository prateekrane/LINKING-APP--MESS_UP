import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/1st_screen";
import MenuScreen from "../screens/menuscreen";
import SocialSub from "../screens/SOCIALPRO/Socialpro_SUB";
import Insta from "../screens/SOCIALPRO/Insta";
import Facebook from "../screens/SOCIALPRO/facebook";
import Flickr from "../screens/SOCIALPRO/Flickr";
import VSCO from "../screens/SOCIALPRO/VSCO";
import Behance from "../screens/SOCIALPRO/Behance";
import JobSub from "../screens/JOBPRO/Jobpro_SUB";
import Linkdin from "../screens/JOBPRO/linkdin";
import IndeedJob from "../screens/JOBPRO/indeedjob";
import Glassdoor from "../screens/JOBPRO/glassdoor";
import Zip from "../screens/JOBPRO/zip";
import Monster from "../screens/JOBPRO/monster";
import WideSub from "../screens/WORLDWIDENEWS/wide_SUB";
import NewsSub from "../screens/SOCIALNEWS/news_SUB";
import Reddit from "../screens/SOCIALNEWS/reddit";
import Twitter from "../screens/SOCIALNEWS/twitter";
import Thread from "../screens/SOCIALNEWS/thread";
import Bluesky from "../screens/SOCIALNEWS/bluesky";
import Spill from "../screens/SOCIALNEWS/spill";
import Sub from "../screens/ENTERTAINMENT/movieSUB";
import Movies from "../screens/ENTERTAINMENT/movies";
import Yandex from "../screens/ENTERTAINMENT/yandex";
import Aisub from "../screens/ENGINER/eng_Sub";
import Astsub from "../screens/ASTROLOGER/astro_SUB";
import Jeffrey from "../screens/ASTROLOGER/jeffrey";
import Clickastro from "../screens/ASTROLOGER/clickastro";
import Astrotalk from "../screens/ASTROLOGER/astrotalk";
import Telsub from "../screens/TELEGRAM/tele_SUB";
import Hack from "../screens/HACKMOD/hack_SUB";
import Timesub from "../screens/TIMEPASS/time_SUB";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="SocialSub"
        component={SocialSub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Insta"
        component={Insta}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Facebook"
        component={Facebook}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Flickr"
        component={Flickr}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="VSCO"
        component={VSCO}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Behance"
        component={Behance}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="JobSub"
        component={JobSub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Linkdin"
        component={Linkdin}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="IndeedJob"
        component={IndeedJob}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Glassdoor"
        component={Glassdoor}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Zip"
        component={Zip}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Monster"
        component={Monster}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="WideSub"
        component={WideSub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="NewsSub"
        component={NewsSub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Reddit"
        component={Reddit}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Twitter"
        component={Twitter}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Thread"
        component={Thread}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Bluesky"
        component={Bluesky}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Spill"
        component={Spill}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Sub"
        component={Sub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Yandex"
        component={Yandex}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Aisub"
        component={Aisub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Astsub"
        component={Astsub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Jeffrey"
        component={Jeffrey}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Astrotalk"
        component={Astrotalk}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Clickastro"
        component={Clickastro}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Telsub"
        component={Telsub}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Hack"
        component={Hack}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="Timesub"
        component={Timesub}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
