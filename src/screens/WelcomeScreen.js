import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../constant/Contant";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ height: "50%", width: "100%" }}>
        <Image
          source={require("../../assets/images/wel.jpeg")}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          top: -30,
        }}
      >
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            borderColor: colors.COLOR_PRIMARY,
            borderWidth: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../../assets/images/burger1.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            borderColor: colors.COLOR_PRIMARY,
            borderWidth: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../../assets/images/burger2.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            borderColor: colors.COLOR_PRIMARY,
            borderWidth: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../../assets/images/burger3.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
      <Text
        style={{
          color: colors.COLOR_PRIMARY,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        40K+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 30,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeList");
        }}
        style={{
          backgroundColor: colors.COLOR_PRIMARY,
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 18, color: colors.COLOR_LIGHT, fontWeight: "700" }}
        >
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
