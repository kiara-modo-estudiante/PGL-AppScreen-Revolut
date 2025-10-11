import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ViewStyle,
  Text,
  Pressable,
} from "react-native";
import { BalanceCardProps } from "../../types/AccountBalanceTypes";
import { colorPalette } from "../../theme/ColorPalette";
import { LinearGradient } from "expo-linear-gradient";
import TextButton from "../ui/TextButton";

const BalanceCard: React.FC<BalanceCardProps> = ({
  backgroundImage,
  style,
  type,
  currency,
  balance,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <View style={styles.infoContainer}>
          <Text style={styles.description}>
            {type} · {currency}
          </Text>
          <Text style={styles.balance}>{balance}</Text>
          <TextButton
            title="Accounts"
            onPress={() => console.log("Accounts button pressed")}
            style={styles.button}
          />
        </View>
        <LinearGradient
          colors={["transparent", colorPalette.backgroundPrimary]}
          style={styles.gradient}
        />
      </ImageBackground>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "35%",
    justifyContent: "flex-end",
  },
  infoContainer: {
    flex: 1,
    position: "relative",
    top: 200,
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
    color: colorPalette.textPrimary,
  },
  balance: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "800",
    color: colorPalette.textPrimary,
  },
  button: {
    width: "30%",
  },
});
