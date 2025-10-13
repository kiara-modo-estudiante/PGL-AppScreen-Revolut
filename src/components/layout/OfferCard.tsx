import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colorPalette } from "../../theme/ColorPalette";

const OfferCard = () => {
  return (
    <View style={styles.container}>
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

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.buttonPrimary,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    margin: 20,
    marginTop: 250,
    paddingTop: 10,
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
