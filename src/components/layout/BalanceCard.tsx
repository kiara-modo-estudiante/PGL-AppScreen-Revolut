import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { BalanceCardProps } from "../../types/accountBalance.types";
import { colorPalette } from "../../theme/colorPalette";
import { LinearGradient } from "expo-linear-gradient";
import TextButton from "../ui/TextButton";
import { formatBalanceParts } from "../../utils/formatBalance";
import typography from "../../theme/typography";

const BalanceCard: React.FC<BalanceCardProps> = ({
  backgroundImage,
  style,
  type,
  currency,
  balance,
}) => {
  const { symbol, main, cents } = formatBalanceParts(currency, balance);

  return (
    <View style={[styles.container, style]}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <View style={styles.infoContainer}>
          <Text style={[typography.buttonText, styles.description]}>
            {type} · {currency}
          </Text>
          <Text style={typography.title}>
            {symbol}
            {main}
            <Text style={styles.cents}>.{cents}</Text>
          </Text>
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
    height: 520,
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginBottom: 10,
    fontWeight: 400,
  },
  cents: {
    fontSize: 35,
  },
  button: {
    width: "30%",
  },
});
