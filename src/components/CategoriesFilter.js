import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories, colors } from "../constant/Contant";

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
              shadowColor: colors.COLOR_DARK,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadRadius: 7,
              marginVertical: 16,
            }}
          >
            <Text
              style={{
                color: idx === 0 ? colors.COLOR_LIGHT : colors.COLOR_DARK,
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
