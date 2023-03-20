import {View, TouchableOpacity} from "react-native"
import RestaurantImage from "./Restaurant/RestaurantImage";
import RestaurantInfo from "./Restaurant/RestaurantInfo";

import { Restaurant } from "@src/types/data/resturant"; 

type RestaurantItemProps = {
    restaurant: Restaurant 
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps): JSX.Element => {
    const { name, image_url, rating } = restaurant;
  return (
    <TouchableOpacity className="mb-8">
      <View className="mt-3 p-4 bg-white">
        <RestaurantImage image={image_url} />
        <RestaurantInfo name={name} rating={rating} />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem