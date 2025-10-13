import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colorPalette } from "../../theme/colorPalette";
import Icon from "../common/Icon";

const PromoCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => {
          console.log("Closing card...");
          setIsVisible(false);
        }}
      >
        <Icon name="close" size={20} color={colorPalette.iconDefault} />
      </TouchableOpacity>
      <View style={styles.cardInfo}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Invite friends, earn €50
        </Text>
        <Text style={styles.description}>Earn €50 for each frien...</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/offers/revolut-gift.png")}
      />
    </View>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.buttonPrimary,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingTop: 10,
    marginHorizontal: 12,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  cardInfo: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    color: colorPalette.textPrimary,
    fontWeight: "600",
    flexWrap: "wrap",
  },
  description: {
    fontSize: 20,
    color: colorPalette.textSecondary,
    flexWrap: "wrap",
  },
  image: {
    width: 130,
    height: 130,
  },
});
