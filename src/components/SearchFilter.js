import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constant/Contant";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: colors.COLOR_LIGHT,
        flexDirection: "row",
        marginVertical: 16,
        borderRadius: 8,
        padding: 16,

        shadowColor: colors.COLOR_DARK,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadRadius: 7,
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
