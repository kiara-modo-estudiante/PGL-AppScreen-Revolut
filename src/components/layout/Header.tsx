import React from "react";
import { StyleSheet, View } from "react-native";
import ProfilePicture from "../common/ProfilePicture";
import SearchBar from "../ui/SearchBar";
import IconButton from "../ui/IconButton";

const Header = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture
        image={require("../../assets/images/pfp/no-profile-picture.png")}
      ></ProfilePicture>
      <SearchBar />
      <IconButton icon="chart-bar"></IconButton>
      <IconButton icon="credit-card"></IconButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 8,
    position: "absolute",
    top: 0,
    zIndex: 99,
  },
  searchBar: {
    width: "80%",
  },
});
