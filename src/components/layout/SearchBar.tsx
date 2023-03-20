import React, { useRef } from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar: React.FC = () => {
  return (
    <View className="mt-[15px] flex-row">
      <GooglePlacesAutocomplete
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View className="ml-[10px]">
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View className="flex-row mr-[8px] bg-white rounded-xl items-center p-[9px]">
            <AntDesign
              name="clockcircle"
              size={11}
              color="black"
              style={{
                marginRight: 5,
              }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
