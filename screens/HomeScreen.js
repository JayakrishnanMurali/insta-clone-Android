import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

import SafeViewAndroid from "../components/SafeViewAndroid";
const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
