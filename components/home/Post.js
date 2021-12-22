import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import CommentIcon from "../../assets/CommentIcon";
import DotsIcon from "../../assets/DotsIcon";
import HeartIcon from "../../assets/HeartIcon";
import SaveIcon from "../../assets/SaveIcon";
import ShareIcon from "../../assets/ShareIcon";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <View style={{ marginTop: 5 }}>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <Comment post={post} />
        </View>
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_pic }} style={styles.story} />
      <Text style={styles.userName}>{post.user}</Text>
    </View>

    <View>
      <TouchableOpacity>
        <DotsIcon />
      </TouchableOpacity>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity>
        <HeartIcon width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginHorizontal: 7 }}>
        <CommentIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <ShareIcon />
      </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity>
        <SaveIcon />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "700", color: "white" }}>
      {post.likes} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const Comment = ({ post }) => (
  <View>
    <Text style={{ color: "gray", marginTop: 5 }}>View all 2 comments</Text>

    {post.comments.map((com, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "700" }}>{com.user}</Text>
          <Text> {com.comment}</Text>
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ef476f",
  },
  userName: {
    color: "white",
    fontWeight: "700",
    marginLeft: 5,
  },
});
export default Post;
