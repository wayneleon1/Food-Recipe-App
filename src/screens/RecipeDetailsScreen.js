import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constant/Contant";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: item.color }}>
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
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.COLOR_LIGHT,
          marginTop: 200,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text style={{ marginVertical: 16, fontSize: 20 }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
