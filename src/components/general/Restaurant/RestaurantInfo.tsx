import { View, Text } from "react-native";

type RestaurantInfoProps = {
  name: string;
  rating: number;
};

const RestaurantInfo = ({ name, rating }: RestaurantInfoProps): JSX.Element => {
  return (
    <View className="flex-row justify-between items-center mt-3">
      <View>
        <Text className="font-bold text-base">{name}</Text>
        <Text className="text-gray-400 text-sm">30-45 - min</Text>
      </View>
      <View className="bg-[#eee] h-10 w-10 items-center rounded-full justify-center">
        <Text>{rating.toString()}</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;
