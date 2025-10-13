import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../ui/IconButton";

const ActionRow = () => {
  return (
    <View style={styles.row}>
      <IconButton icon="plus" label="Add money" />
      <IconButton icon="bizum" label="Bizum" />
      <IconButton icon="shuffle-variant" label="Move" />
      <IconButton icon="dots-horizontal" label="More" />
    </View>
  );
};

export default ActionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: -100,
  },
});
