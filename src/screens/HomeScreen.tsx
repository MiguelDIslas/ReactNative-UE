import React from "react";
import { SafeAreaView, Platform, StatusBar, ScrollView } from "react-native";
import { View } from "react-native";
import HeaderTabs from "@src/components/layout/HeaderTabs";
import SearchBar from "@src/components/layout/SearchBar";
import Categories from "@src/components/home/Categories";
import RestaurantItem from "@src/components/general/RestaurantItem";
import { localRestaurants } from './../data/resturants';

const HomeScreen: React.FC = () => {
  const isAndroid = Platform.OS === "android";
  return (
    <SafeAreaView
      className="flex-1 bg-[#eee]"
      style={{
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="bg-[#fff] p-[15px]">
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />

        {localRestaurants.map((restaurant, index) => (
          <RestaurantItem key={index} restaurant={restaurant} />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
