import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constant/Contant";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#6f4e37" }}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          marginHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name="arrow-circle-left" size={28} color="black" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="black" />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.COLOR_LIGHT,
          marginTop: 200,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",s
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
