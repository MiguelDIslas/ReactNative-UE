import { Image, TouchableOpacity } from "react-native";
import CommunityMaterialIcons from "react-native-vector-icons/Ionicons";

type RestaurantImageProps = {
  image: string;
};

const RestaurantImage = ({image}: RestaurantImageProps): JSX.Element => {
  return (
    <>
      <Image
        className="w-full h-[180px]"
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity className="absolute right-5 top-5">
        <CommunityMaterialIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default RestaurantImage;
