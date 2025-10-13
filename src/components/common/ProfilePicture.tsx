import React from "react";
import { Image, StyleSheet } from "react-native";
import { ProfilePictureProps } from "../../types/image.types";

const ProfilePicture: React.FC<ProfilePictureProps> = ({ image }) => {
  return <Image source={image} style={styles.image} />;
};

export default ProfilePicture;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
});
