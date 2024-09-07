import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText="Hi, Leon" headIcon="bell-o" />
      <SearchFilter icon="search" placeholder="Search Your Fav Recipes" />
    </SafeAreaView>
  );
};

export default RecipeListScreen;
