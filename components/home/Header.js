import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import HeartIcon from "../../assets/HeartIcon";
import PlusIcons from "../../assets/PlusIcons";
import ChatIcon from "../../assets/ChatIcon";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <PlusIcons />
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <HeartIcon />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unReadMessages}>
            <Text style={styles.unReadBadgeNumber}>11</Text>
          </View>
          <ChatIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  heartIcon: {
    paddingHorizontal: 10,
  },
  unReadMessages: {
    backgroundColor: "#e63946",
    position: "absolute",
    left: 13,
    bottom: 13,
    width: 22,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unReadBadgeNumber: {
    color: "white",
    fontWeight: "700",
  },
});
export default Header;
