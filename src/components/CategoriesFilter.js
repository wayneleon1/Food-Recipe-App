import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories, colors, shadow } from "../constant/Contant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, idx) => (
          <View
            key={item.id}
            style={{
              backgroundColor:
                idx === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              padding: 10,
              borderRadius: 8,
              marginRight: 10,
              marginVertical: 16,
              ...shadow,
            }}
          >
            <Text
              style={{
                color: idx === 0 ? colors.COLOR_LIGHT : colors.COLOR_DARK,
                fontSize: 16,
              }}
            >
              {item.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
