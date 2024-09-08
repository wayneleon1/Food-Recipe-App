import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText="Hi, Leon" headIcon="bell-o" />
      <SearchFilter icon="search" placeholder="Search Your Fav Recipes" />
      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
