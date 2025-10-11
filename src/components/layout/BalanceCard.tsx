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

const BalanceCard: React.FC<BalanceCardProps> = ({
  backgroundImage,
  style,
  type,
  currency,
  balance,
}) => {
  return (
    <ImageBackground source={backgroundImage} style={[styles.container, style]}>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>
          {type} · {currency}
        </Text>
        <Text style={styles.balance}>{balance}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Accounts</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  infoContainer: {
    flex: 1,
    position: "relative",
    top: 200,
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
    backgroundColor: colorPalette.buttonPrimary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: colorPalette.textPrimary,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
});
