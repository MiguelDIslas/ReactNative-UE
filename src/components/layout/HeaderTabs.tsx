import React, {useState} from "react";
import { View } from "react-native";
import HeaderButton from "./HeaderButton";

const HeaderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Delivery");

  return (
    <View className="flex-row self-center justify-center">
      <HeaderButton
        title="Coupons"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Discounts"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;
