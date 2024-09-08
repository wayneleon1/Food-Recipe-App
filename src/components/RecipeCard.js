import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, recipeList, shadow } from "../constant/Contant";

const RecipeCard = () => {
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: colors.COLOR_LIGHT, ...shadow }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecipeCard;
