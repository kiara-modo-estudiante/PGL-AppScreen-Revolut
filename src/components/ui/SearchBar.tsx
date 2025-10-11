import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colorPalette } from "../../theme/ColorPalette";

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="magnify"
        size={30}
        color={colorPalette.iconActive}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={colorPalette.textPrimary}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorPalette.buttonPrimary,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    width: "50%",
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: colorPalette.textPrimary,
  },
});
