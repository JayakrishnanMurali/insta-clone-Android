import React from "react";
import { SafeAreaView, Text } from "react-native";

import SafeViewAndroid from "../components/SafeViewAndroid";
const HomeScreen = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
