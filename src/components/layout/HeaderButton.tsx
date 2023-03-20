import React from "react";
import { Text, TouchableOpacity } from "react-native";
type Props = {
  title: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderButton: React.FC<Props> = ({
  title,
  activeTab,
  setActiveTab,
}) => {
    const activeBackground = activeTab === title ? "black" : "white";
    const activeText = activeTab === title ? "white" : "black";
  return (
    <TouchableOpacity
      className={`bg-${activeBackground} py-[6px] px-[16px] rounded-2xl`}
      onPress={() => setActiveTab(title)}
    >
      <Text className={`text-${activeText} text-[15px] font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
