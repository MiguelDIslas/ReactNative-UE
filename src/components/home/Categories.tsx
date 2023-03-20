import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { categoriesMenu } from "@src/data/categoriesMenu";

const Categories: React.FC = () => {
  return (
    <View className="mt-2 bg-white py-3 pl-5">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesMenu.map((category, index) => (
          <View key={index} className="items-center mr-[30px]">
            <Image
              source={category.image}
              className="w-[50px] h-[40px]"
              resizeMode="contain"
            />
            <Text className="text-sm font-bold">{category.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
