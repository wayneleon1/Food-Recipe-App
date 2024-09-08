import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../constant/Contant";
import { shadow } from "../constant/shadowStyles";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: colors.COLOR_LIGHT,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        borderRadius: 8,
        padding: 8,
        ...shadow,
      }}
    >
      <FontAwesome name={icon} size={20} color={colors.COLOR_PRIMARY} />
      <TextInput style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}>
        {placeholder}
      </TextInput>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
