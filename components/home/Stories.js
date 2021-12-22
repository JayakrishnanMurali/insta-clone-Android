import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USER_DATA } from "../../data/UserData";

const Stories = () => {
  return (
    <View style={{ marginBottom: 7, marginTop: 7 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USER_DATA.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.userName}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 65,
    height: 65,
    marginLeft: 8,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ef476f",
  },
  userName: {
    color: "white",
    fontSize: 12,
  },
});

export default Stories;
